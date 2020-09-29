import React, { Component } from "react";
import { getUserPoems} from "../../services/poem-helpers";
import Poems from "../widgets/Poems";
import styles from "../../styles/PoemsContainer.module.css";


class FeedByAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poems: ''
    };
  }

  componentDidMount = async () => {
    console.log('state', this.state)
    this.getPoems()
  };

  componentDidUpdate = () => {
    if (this.props.submitted) {
      this.getPoems()
      this.props.updateSubmittedState()
    }
  }

  getPoems = async () => {
    const res = await getUserPoems(this.props.author);
    console.log('res', res)
    this.setState({
      poems: res,
    });
  }

  render() {
    const poems =
      this.state.poems.length === 0 ? (
        console.log('something wrong with state', this.state.poems)
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

export default FeedByAuthor;
