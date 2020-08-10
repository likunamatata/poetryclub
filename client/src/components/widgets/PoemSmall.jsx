import React, { Component } from "react";
import {Link} from 'react-router-dom'
import styles from "../../styles/Poem.module.css";
import { likePoem, getPoemLikes } from "../../services/like-helpers";

export default class PoemSmall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: "",
      heartClass: styles.unliked,
    };
  }

  componentDidMount = async () => {
    this.displayLikes();
  };

  displayLikes = async () => {
    const { poem, currentUser } = this.props;
    const response = await getPoemLikes(currentUser.id, poem.id);
    this.setState({
      likes: response.data,
      heartClass: response.data.mine === 1 ? styles.liked : styles.unliked,
    });
  };

  likeAndUpdate = async (user_id, poem_id) => {
    console.log('Im liking', user_id, poem_id)
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
      <Link to={`/poems/${poem.id}`}>
        <p>{poem.title}</p>
        <p className={styles.poemSnippet}>{`${first_line}...`}</p>
          <p>{`By ${poem.username}`}</p>
          </Link>
        <div className={styles.like}>
          <svg className={styles.svg}>
            <path
              className={heartClass}
              onClick={() => this.likeAndUpdate(currentUser.id, poem.id)}
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
