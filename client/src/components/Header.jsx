import React from "react";
import { Link } from 'react-router-dom'

export default function Header(props) {
  const logout = props.currentUser ? (
    <button className="logout" onClick={props.handleLogout}>
      Logout
    </button>
  ) : (
    ""
  );
  return (
    <div className="header">
      <div className="logout-container">{logout}</div>
      <Link to="/" className="title">The Poem Club</Link>
    </div>
  );
}
