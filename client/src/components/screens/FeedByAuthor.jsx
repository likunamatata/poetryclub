import React, { Component } from "react";
import { getAllPoems} from "../../services/poem-helpers";
import Poems from "../widgets/Poems";
import styles from "../../styles/PoemsContainer.module.css";
// import SearchBar from "../widgets/SearchBar";


class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poems: [],
      keyword: ""
    };
  }

  componentDidMount = async () => {
    this.getPoems()
  };

  componentDidUpdate = () => {
    if (this.props.submitted) {
      this.getPoems()
      this.props.updateSubmittedState()
    }
  }
  getPoems = async () => {
    const res = await getAllPoems();
    this.setState({
      poems: res.data,
    });
  }

  render() {
    const poems =
      this.state.poems.length === 0 ? (
        ""
      ) : (
          <Poems poems={this.state.poems} currentUser={this.props.currentUser} />
        );
    return (
      <div className={styles.container}>
        {poems}
      </div>
    );
  }
}

export default Feed;
