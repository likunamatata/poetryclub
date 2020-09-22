import React from "react";
import { Link } from 'react-router-dom'

export default function Header(props) {
  const optionsIcon = props.currentUser ? (
    // <button className="logout" onClick={props.handleLogout}>
    //   Logout
    // </button>
    <i className="material-icons md-36" onClick={props.showPoemLargeOptions}>more_horiz</i>
  ) : (
      ""
    );
  return (
    <div className="header">
      {/* <div className="menu-container">{logout}</div> */}
      <div className="menu-container">{optionsIcon}</div>
      <Link to="/" className="title">The Poem Club</Link>
      
      <div id="id01" className="w3-modal" style={props.poemLargeOptions ? { display: 'block' } : { display: 'none' }}>
        <div className="w3-modal-content w3-animate-opacity w3-card-4">
          <header className="w3-container w3-teal">
            <span
              className="w3-button w3-display-opacity"
              onClick={props.showPoemLargeOptions}
            >&times;</span>
            <h2>Opened</h2>
          </header>
        </div>
      </div>

    </div>
  );
}
