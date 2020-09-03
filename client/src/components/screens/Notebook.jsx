import React, { Component } from "react";
import { getUserPoems } from "../../services/poem-helpers";
import Poems from "../widgets/Poems"
import PoemsLiked from "../widgets/PoemsLiked"
import { getLikes } from "../../services/like-helpers"
import styles from '../../styles/Notebook.module.css'

class Notebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poems: [],
      likes: [],
      myPoems: true,
    };
  }

  componentDidMount = async () => {
    this.getPoemsAndLikes()
  };

  getPoemsAndLikes = async () => {
    const userPoems = await getUserPoems(this.props.currentUser.id);
    const userLikes = await getLikes()
    this.setState({
      poems: userPoems,
      likes: userLikes
    });
  }

  togglePoems = (tab) => {
    this.setState({
      myPoems: false,
    })
    this.setState(prevState => ({
      [tab]: !prevState[tab]
    }))
  }

  render() {
    const { myPoems } = this.state
    const poems = (
      this.state.poems.length === 0
        ? ""
        :
        <div>
          <Poems poems={this.state.poems} currentUser={this.props.currentUser} />
        </div>
    )
    const likes = (
      this.state.likes.length === 0
        ? ""
        :
        <div>
          <PoemsLiked likes={this.state.likes} currentUser={this.props.currentUser} getPoemsAndLikes={this.getPoemsAndLikes} />
        </div>
    )
    return (
      <div >
        <div className={styles.btnWrapper}>
          <button
            id={styles.leftBtn}
            className={styles.notebookBtn}
            // BLUE STYLE
            // style={myPoems ? { backgroundColor: "#0082E3" } : { backgroundColor: "#FFF", color: "#0082E3" }}
            style={myPoems ? { backgroundColor: "#8E8E93" } : { backgroundColor: "#FFF", color: "#8E8E93" }}
            onClick={() => this.togglePoems('myPoems')}
          >
            My Poems
          </button>
          <button
            id={styles.rightBtn}
            className={styles.notebookBtn}
            // BLUE STYLE
            // style={!myPoems ? { backgroundColor: "#0082E3" } : { backgroundColor: "#FFF", color: "#0082E3" }}
            style={!myPoems ? { backgroundColor: "#8E8E93" } : { backgroundColor: "#FFF", color: "#8E8E93" }}
            onClick={() => this.togglePoems('likedPoems')}
          >
            Liked Poems
          </button>
        </div>
        {myPoems ?
          <>
            {poems}
          </>
          :
          <>
            {likes}
          </>
        }
      </div>
    );
  }
}

export default Notebook;
