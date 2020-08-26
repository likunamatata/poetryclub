import React, { Component } from "react";
import styles from "../../styles/Poem.module.css";
import { getOnePoem } from "../../services/poem-helpers";
import { likePoem, getPoemLikes } from "../../services/like-helpers";
import { Twitter, Facebook, Mail } from 'react-social-sharing'

export default class PoemLarge extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props)
  }

  componentDidMount = async () => {
    const res = await getOnePoem(this.props.poem_id);
    this.setState({
      poem: res.data
    });
    this.displayLikes()
  };

  displayLikes = async () => {
    const { poem_id, currentUser_id } = this.props;
    console.log(poem_id, currentUser_id);
    const response = await getPoemLikes(currentUser_id, poem_id);
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
    console.log(this.state)
    const { currentUser_id, poem_id } = this.props;
    const { heartClass, likes } = this.state;
    const { title, username, id } = !this.state.poem ? "" : this.state.poem;
    let parsed_text = null;
    try {
      parsed_text = JSON.parse(this.state.poem.text);
    } catch (e) {
      parsed_text = this.state.poem ? this.state.poem.text : "";
    }

    const lines = !parsed_text ? '' : parsed_text.blocks.map((line, index) => {
      return <p key={index} className={styles.poemLine}>{line.text}</p>
    })

    return (
      <div className={styles.poem}>

        <div className= {styles.social}>
          {console.log(this.state.poem)}
          <Twitter
            solid small
            link={`https://poetryclub.surge.sh/poems/${id}`}
          />
          <Facebook
            solid small
            link={`https://poetryclub.surge.sh/poems/${id}`}
          />
          <Mail
            solid small
            link={`https://poetryclub.surge.sh/poems/${id}`}
          />
        </div>

        <h1>{title}</h1>
        <p>{username}</p>
        {lines}
        <div className={styles.like}>
          <svg className={styles.svg}>
            <path
              className={heartClass}
              onClick={() => this.likeAndUpdate(currentUser_id, poem_id)}
              d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
            />
          </svg>
          <p className={styles.count}>{likes ? likes.count : ''}</p>
        </div>
      </div>
    );
  }
}
