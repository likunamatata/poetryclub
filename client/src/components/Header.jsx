import React from "react";

export default function Header(props) {
  const logout = props.currentUser ?  <button className='logout' onClick={props.handleLogout}>Logout</button> : ''
  return (
    <div className="header">
      <h1>The Poem Club</h1>
      {logout}
    </div>
  );
}
