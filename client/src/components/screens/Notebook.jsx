import React, { Component } from "react";
import { getUserPoems } from "../../services/poem-helpers";
import Poems from "../widgets/Poems"

class Notebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poems: [],
    };
  }

  componentDidMount = async () => {
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
        {poems}
      </div>
    );
  }
}

export default Notebook;
