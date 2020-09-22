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
      { !props.poemLargeOptions ?
        <>
          {/* <div className="menu-container">{logout}</div> */}
          <div className="menu-container">{optionsIcon}</div>
          <Link to="/" className="title">The Poem Club</Link>
        </>
        :
        <div id="id01" className="w3-modal w3-animate-opacity" style={props.poemLargeOptions ? { display: 'block' } : { display: 'none' }}>
          <div className="w3-modal-content w3-card-1">
            <header className="w3-container w3-white">
              <span
                className="w3-button"
                onClick={props.showPoemLargeOptions}
              >&times;</span>
              <h2>Opened</h2>
            </header>
          </div>
        </div>
      }
    </div >
  );
}
