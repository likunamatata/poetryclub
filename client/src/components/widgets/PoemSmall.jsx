import React, { Component } from "react";
import { Link } from 'react-router-dom'
import styles from "../../styles/Poem.module.css";
import { likePoem, getPoemLikes } from "../../services/like-helpers";

export default class PoemSmall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: "",
      heartClass: styles.unliked,
    };
  };

  componentDidMount = async () => {
    this.displayLikes();
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.heartClass, 'vs', this.state.heartClass)
    if (prevState.heartClass !== this.state.heartClass) {
      console.log('my like has changed.')
    }
  }

  displayLikes = async () => {
    const { poem, currentUser } = this.props;
    // This ternary checks if the server 
    // should get and return likes from poems I like(./PoemsLiked)
    // or poems that I wrote (./Poems)
    const response = poem.poem_id
      ?
      await getPoemLikes(currentUser.id, poem.poem_id)
      :
      await getPoemLikes(currentUser.id, poem.id);
    this.setState({
      likes: response.data,
      heartClass: response.data.mine === 1 ? styles.liked : styles.unliked,
    });
  };

  likeAndUpdate = async (user_id, poem_id) => {
    console.log(poem_id)
    const response = await likePoem(user_id, poem_id);
    this.setState({
      likes: response.data,
      heartClass: response.data.mine === 1 ? styles.liked : styles.unliked,
    });
  };

  render() {
    const { poem, currentUser } = this.props;
    const { likes, heartClass } = this.state;
    const { text } = poem;


    let parsed_text = null;

    try {
      parsed_text = JSON.parse(text);
    } catch (e) {
      parsed_text = text;
    }

    const first_line = parsed_text ? parsed_text.blocks[0].text : ''


    return (
      <div className={styles.poem}>
        {console.log('===>', likes)}
        <Link to={poem.poem_id ? `/poems/${poem.poem_id}` : `/poems/${poem.id}`}>
          <p>{poem.title}</p>
          <p className={styles.poemSnippet}>{`${first_line}...`}</p>
          <p>{`By ${poem.username}`}</p>
        </Link>
        <div className={styles.like}>
          <svg className={styles.svg}>
            <path
              className={heartClass}
              onClick={() => (
                poem.poem_id ? this.likeAndUpdate(currentUser.id, poem.poem_id) : this.likeAndUpdate(currentUser.id, poem.id)
              )}
              d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
            />
          </svg>
          <p className={styles.count}>{likes.count}</p>
        </div>
        <hr />

      </div>
    );
  }
}
