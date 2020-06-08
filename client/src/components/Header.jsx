import React from "react";
// import { ReactComponent as Logo } from '../services/dd_logo_h_white.svg'
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="header">
      <h1>Poetry Club</h1>
      <button onClick={props.handleLogout}>Logout</button>
    </div>
  );
}
