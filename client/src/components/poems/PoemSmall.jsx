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
      <Link to={`/poems/${poem.id}`}className={styles.poem}>
        <p>{poem.title}</p>
        <p className={styles.poemSnippet}>{`${first_line}...`}</p>
        <p>{`By ${poem.username}`}</p>
        <div className={styles.like}>
          <svg className={styles.svg}>
            <path
              className={heartClass}
              onClick={() => this.likeAndUpdate(currentUser.id, poem.id)}
              d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
            />
          </svg>
          <p className={styles.count}>{likes.count}</p>
        </div>
        <hr />
      </Link>
    );
  }
}
