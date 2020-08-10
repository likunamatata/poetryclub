import React, { Component } from "react";
import PoemSmall from "./PoemSmall";
import styles from '../../styles/PoemsContainer.module.css'

class Poems extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const poems = this.props.poems.map((poem, index) => (
          <PoemSmall poem={poem} key={index} currentUser={this.props.currentUser} />
        ))
    return (
      <div className={styles.container}>
        {poems}
      </div>
    );
  }
}

export default Poems;
