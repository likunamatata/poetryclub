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

  //OLD SEARCH OPTION ON FEED 
  // handleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

// <!--   handleSearch = async () => {
//     const { keyword } = this.state
//     if (keyword === '') {
//       const res = await getAllPoems();
//       this.setState({
//         poems: res.data,
//       });
//     }
//     else {
//       const response = await getSomePoems(keyword);
//       this.setState({
//         poems: response.data,
//       });
//     }

//   }; -->


  componentDidMount = async () => {
    this.getPoems()
  };

  componentDidUpdate = () => {
    // componentDidUpdate needs a conditional that tests a change in a value.
    // If that value changes, then it will run/update
    if (this.props.submitted) {
      this.getPoems()
      this.props.updateSubmittedState() //turns submitted to 'false'
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
        {/* OLD SEARCH OPTION ON FEED  */}
        {/* <SearchBar handleChange={this.handleChange} handleSearch={this.handleSearch} /> */}
        {poems}
      </div>
    );
  }
}

export default Feed;
