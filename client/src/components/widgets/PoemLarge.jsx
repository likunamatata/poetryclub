import React, { Component } from "react";
import styles from "../../styles/Poem.module.css";
import { getOnePoem } from "../../services/poem-helpers";

export default class PoemLarge extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    const res = await getOnePoem(this.props.poem_id);
    this.setState({
      poem: res.data,
    });
  };

  render() {

    const {title, username} = !this.state.poem ? '' : this.state.poem 
    let parsed_text = null;
    try {
      parsed_text = JSON.parse(this.state.poem.text);
    } catch (e) {
      parsed_text = this.state.poem ? this.state.poem.text : '';
    }

    const lines = !parsed_text ? '' : parsed_text.blocks.map( (line, index) => {
      return <p key={index} className={styles.poemLine}>{line.text}</p>
    })

    return (
      <div className={styles.poem}>
        <h1>{title}</h1>
        <p>{username}</p>
        {lines}
      </div>
    );
  }
}