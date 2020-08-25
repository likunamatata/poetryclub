import React, { Component } from "react";
import SearchBar from '../widgets/SearchBar'
import Poems from '../widgets/Poems'
import { getSomePoems } from '../../services/poem-helpers'
import { sortBy } from '../../services/sort-helpers'
import Sort from '../widgets/Sort'

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

  handleSort = (e) => {
    const sort = e.target.value
    const { poems } = this.state
    this.setState({
            poems: poems.sort(sortBy[sort])
          })
  }
  
  render() {
    const poems = (this.state.poems.length === 0
      ? ""
      : <Poems poems={this.state.poems} currentUser={this.props.currentUser}/>);
    return (
      <div>
        <SearchBar handleChange={this.handleChange} handleSearch={this.handleSearch} />
        <Sort handleSort={this.handleSort}/>
      {poems}
      </div>

    );
  }
}

export default Feed;
