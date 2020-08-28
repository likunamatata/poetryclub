import React, { Component } from "react";
import SearchBar from '../widgets/SearchBar'
import Poems from '../widgets/Poems'
import { getSomePoems } from '../../services/poem-helpers'


class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      poems: []
    };
    console.log(props)
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSearch = async () => {
    const res = await getSomePoems(this.state.keyword);
    this.setState({
      poems: res.data,
    });
  };

  
  render() {
    const poems = (this.state.poems.length === 0
      ? ""
      : <Poems poems={this.state.poems} currentUser={this.props.currentUser}/>);
    
    return (
      <div>
        <SearchBar handleChange={this.handleChange} handleSearch={this.handleSearch} />
      {poems}
      </div>

    );
  }
}

export default Feed;
