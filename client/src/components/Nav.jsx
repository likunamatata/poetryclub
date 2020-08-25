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
    const { feedNav, searchNav, writeNav, notebookNav } = this.state

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke={notebookNav ? "#0082E3" : null}
            fill={notebookNav ? "#0082E3" : null}
          >
            <path d="M20.997 18.529c-.372.223-1.044.565-1.997.904v-5.038c-3.979.327-6.323 1.521-7 1.954-.677-.433-3.022-1.627-7-1.954v5.037c-.954-.339-1.625-.681-1.996-.902l-.004-1.944c-.008-2.036.06-2.531 1.863-2.929 2.28-.507 4.616-.775 5.225-2.323.282-.713.117-1.509-.488-2.365-1.588-2.246-2.007-4.36-1.183-5.952.645-1.244 2.018-2.017 3.583-2.017 1.562 0 2.932.766 3.573 1.999.827 1.587.409 3.709-1.175 5.973-.6.857-.762 1.652-.481 2.362.607 1.534 2.929 1.815 5.219 2.323 1.805.398 1.873.898 1.863 2.957l-.002 1.915zm-2.997 2.465c-1.588.287-3.853.925-5.5 1.638v-5.431c1.216-.783 3.666-1.472 5.5-1.707v5.5zm-6.5 1.638c-1.648-.713-3.912-1.351-5.5-1.638v-5.5c1.834.235 4.284.924 5.5 1.707v5.431zm7.851-9.952c-2.865-.632-5.663-.951-4.133-3.134 3.885-5.555.702-9.546-3.218-9.546s-7.12 4.022-3.218 9.546c1.557 2.203-1.328 2.516-4.134 3.134-2.56.566-2.656 1.783-2.648 3.91l.004 2.475s.957.758 2.996 1.431v1.352c.148.022 3.57.457 7 2.131 3.429-1.673 6.866-2.111 7-2.131v-1.352c2.039-.673 2.996-1.431 2.996-1.431l.003-2.451c.01-2.143-.077-3.366-2.648-3.934z" />
          </svg>
        </Link>
      </div >
    );
  }
}
export default Nav