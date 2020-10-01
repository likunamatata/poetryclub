import React, { Component } from "react";
import styles from "../../styles/Poem.module.css";
import { getOnePoem, getAllPoems } from "../../services/poem-helpers";
import { likePoem, getPoemLikes } from "../../services/like-helpers";
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";

class PoemLarge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: "",
      heartClass: styles.unliked,
      alert: "",
      allPoemIDs: [],
      redirect: false
    };
  }


  componentDidMount = async () => {
    this.displayLikes();
    await this.getAllPoemIDs();
    // redirects if trying to go back to a deleted poem
    if (this.state.redirect) {
      const { history } = this.props;
      history.push('/')
    }
    const res = await getOnePoem(this.props.poem_id);
    this.setState({
      poem: res.data,
    });
  };

  // checks if poem is deleted.
  checkIfPoemIsDeleted = () => {
    const poemID = window.location.pathname.substring(7)
    const redirectBool = this.state.allPoemIDs.includes(parseInt(poemID))
    this.setState({ redirect: !redirectBool })
  }
  // gets all poem ids and set's state for redirection
  getAllPoemIDs = async () => {
    const res = await getAllPoems()
    const poems = res.data
    // build array of all poem ids
    const poemIDs = poems.map(poem => poem.id)
    this.setState({ allPoemIDs: poemIDs })

    this.checkIfPoemIsDeleted()
  }

  displayLikes = async () => {
    const { poem_id, currentUser } = this.props;
    const response = await getPoemLikes(currentUser?.id, poem_id);
    this.setState({
      likes: response.data,
      heartClass: response.data.mine === 1 ? styles.liked : styles.unliked,
    });
  };

  likeAndUpdate = async (user, poem_id) => {
    const response = await likePoem(user.id, poem_id);
    this.setState({
      likes: response.data,
      heartClass: response.data.mine === 1 ? styles.liked : styles.unliked,
    });
  };

  askToLogin = async () => {
    this.setState({
      alert: <p>You need to login first</p>,
    });
  };

  render() {
    const { currentUser, poem_id} = this.props;
    const { heartClass, likes, alert} = this.state;

    const { title, username, created_at, user_id } = !this.state.poem ? "" : this.state.poem;
    let parsed_text = null;
    let date = !created_at ? '' : new Date(created_at)
    let date_text = !date ? '' : `${date.getMonth()}.${date.getDate()}.${date.getFullYear()}`
    try {
      parsed_text = JSON.parse(this.state.poem.text);
    } catch (e) {
      parsed_text = this.state.poem ? this.state.poem.text : "";
    }

    const lines = !parsed_text
      ? ""
      : parsed_text.blocks.map((line, index) => {
        return (
          <p key={index} className={styles.poemLine}>
            {line.text}
          </p>
        );
      });

    return (
      <div className={styles.poem}>
        <div className={styles.poemHeader}>
          <Link to={`/authors/${user_id}`}>
            <p className={styles.poemAuthor}>@{username}</p>
          </Link>
          <p>{date_text}</p>
        </div>
        <h3>{title}</h3>

        {lines}
        {alert}

        <div className={styles.poemButtons}>

          <div className={styles.like}>
            <svg className={styles.svg}>
              <path
                className={heartClass}
                onClick={
                  !currentUser
                    ? () => this.askToLogin()
                    : () => this.likeAndUpdate(currentUser, poem_id)
                }
                d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
              />
            </svg>
            <p className={styles.count}>{likes ? likes.count : ""}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PoemLarge)
