import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedNav: true,
      searchNav: false,
      writeNav: false,
      notebookNav: false

    }
  }

  changeColor = (nav) => {
    this.setState({
      feedNav: false,
      searchNav: false,
      writeNav: false,
      notebookNav: false
    })
    this.setState(
      prevState => ({
        [nav]: !prevState[nav]
      })
    )
  }


  render() {
    const { feedNav, searchNav, writeNav } = this.state

    return (
      <div className="nav">
        {/* <Link to="/">Feed</Link> */}
        {/* <Link to="/search">Search</Link> */}
        {/* <Link to="/write">Write</Link>
      <Link to="/notebook">Notebook</Link> */}
        <Link to="/" onClick={() => this.changeColor('feedNav')}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke={feedNav ? "#0082E3" : null} 
            fill={feedNav ? "#0082E3" : null}
          >
            <path d="M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z" />
          </svg>
        </Link>
        <Link to="/search" onClick={() => this.changeColor('searchNav')}>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            stroke={searchNav ? "#0082E3" : null}
            fill={searchNav ? "#0082E3" : null}
          >
            <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
          </svg>
        </Link>
        <Link to="/write" onClick={() => this.changeColor('writeNav')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke={writeNav ? "#0082E3" : null}
            fill={writeNav ? "#0082E3" : null}
          >
            <path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z" />
          </svg>
        </Link>
        <Link to="/notebook" onClick={() => this.changeColor('notebookNav')}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path stroke="black" strokeWidth="1" fill="none" d="M12 4.707c-2.938-1.83-7.416-2.567-12-2.707v17.714c3.937.12 7.795.681 10.667 1.995.846.388 1.817.388 2.667 0 2.872-1.314 6.729-1.875 10.666-1.995v-17.714c-4.584.14-9.062.877-12 2.707zm-10 13.104v-13.704c5.157.389 7.527 1.463 9 2.334v13.168c-1.525-.546-4.716-1.505-9-1.798zm20 0c-4.283.293-7.475 1.252-9 1.799v-13.171c1.453-.861 3.83-1.942 9-2.332v13.704z"/></svg>
        </Link>
      </div >
    );
  }
}
export default Nav