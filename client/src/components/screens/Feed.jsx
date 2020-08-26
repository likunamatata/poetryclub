import React, { Component } from "react";
import { getAllPoems, getSomePoems } from "../../services/poem-helpers";
import Poems from "../widgets/Poems";
import styles from "../../styles/PoemsContainer.module.css";
import SearchBar from "../widgets/SearchBar";
// import Sort from '../widgets/Sort'
// import {sortBy} from '../../services/sort-helpers'

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poems: [],
      keyword: ""
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSearch = async () => {
    const { keyword } = this.state
    if (keyword === '') {
      const res = await getAllPoems();
      this.setState({
        poems: res.data,
      });
    }
    else {
      const response = await getSomePoems(keyword);
      this.setState({
        poems: response.data,
      });
    }
 
  };

  // handleSort = (e) => {
  //   const sort = e.target.value
  //   const { poems } = this.state
  //   this.setState({
  //           poems: poems.sort(sortBy[sort])
  //         })
  // }

  componentDidMount = async () => {
    const res = await getAllPoems();
    this.setState({
      poems: res.data,
    });
    console.log(this.state.poems)
  };

  render() {
    const poems =
      this.state.poems.length === 0 ? (
        ""
      ) : (
        <Poems poems={this.state.poems} currentUser={this.props.currentUser} />
      );
    return (
      <div className={styles.container}>
        <SearchBar handleChange={this.handleChange} handleSearch={this.handleSearch} />
        {/* <Sort handleSort={this.handleSort}/> */}
        {poems}
      </div>
    );
  }
}

export default Feed;
