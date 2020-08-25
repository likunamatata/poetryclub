import React, { Component } from "react";
import { getUserPoems } from "../../services/poem-helpers";
import Poems from "../widgets/Poems"
import PoemsLiked from "../widgets/PoemsLiked"
import { getLikes } from "../../services/like-helpers"

class Notebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poems: [],
      likes: []
    };
  }

  componentDidMount = async () => {
    const userPoems = await getUserPoems(this.props.currentUser.id);
    const userLikes = await getLikes()
    this.setState({
      poems: userPoems,
      likes: userLikes
    });
  };


  render() {
    const poems = (
      this.state.poems.length === 0
        ? ""
        :
        <div>
          <h1>My Poems</h1>
          <Poems poems={this.state.poems} currentUser={this.props.currentUser} />
        </div>
    )
    const likes = (
      this.state.likes.length === 0
        ? ""
        :
        <div>
          <h1>Poems That I Like</h1>
          <PoemsLiked likes={this.state.likes} currentUser={this.props.currentUser} />
        </div>
    )
    return (
      <div className="notebook">
        {poems}
        {likes}
      </div>
    );
  }
}

export default Notebook;
