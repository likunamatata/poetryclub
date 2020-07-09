import React, { Component } from "react";
import { getUserPoems } from "../../services/poem-helpers";
import Poems from "./Poems"

class Notebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poems: [],
    };
  }

  componentDidMount = async () => {
    console.log(this.props.currentUser.id)
    const res = await getUserPoems(this.props.currentUser.id);
    this.setState({
      poems: res.data,
    });
  };

  render() {
    const poems = (this.state.poems.length === 0
      ? ""
      : <Poems poems={this.state.poems} currentUser={this.props.currentUser}/>);
    return (
      <div className="notebook">
        <h1>Notebook</h1>
        {poems}
      </div>
    );
  }
}

export default Notebook;
