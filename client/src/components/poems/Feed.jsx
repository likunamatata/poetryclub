import React, { Component } from "react";
import { getAllPoems } from "../../services/poem-helpers";
import Poems from "./Poems"
import styles from '../../styles/PoemsContainer.module.css'

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poems: [],
    };
  }

  componentDidMount = async () => {
    const res = await getAllPoems();
    this.setState({
      poems: res.data,
    });
  };

  render() {
    const poems = (this.state.poems.length === 0
      ? ""
      : <Poems poems={this.state.poems} currentUser={this.props.currentUser}/>);
    return (
      <div className={styles.container}>
        <h1>Feed</h1>
        {poems}
      </div>
    );
  }
}

export default Feed;
