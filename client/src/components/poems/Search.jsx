import React, { Component } from "react";
import { getSomePoems } from "../../services/poem-helpers";
import Poems from "./Poems"
import styles from '../../styles/PoemsContainer.module.css'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      poems: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
        [name]: value

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
      <div className={styles.container}>
        <h1>Search</h1>
        <form className={styles.authForm} onSubmit={(e) => {
          e.preventDefault();
          this.handleSearch();
        }} >
        <input className={styles.input} name="keyword" type="text" placeholder="Enter your email" value={this.state.keyword} onChange={this.handleChange} />
  
          </form>
        {poems}
      </div>
    );
  }
}

export default Search;
