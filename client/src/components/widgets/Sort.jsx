import React from "react";

function Sort (props) {

    return (
      <div >
        <select onChange={props.handleSort}>
          <option>Sort By</option>
          <option>By Title</option>
          <option>By Author</option>
          <option>By Date - Newest</option>
          <option>By Date - Oldest</option>
      </select>
      </div>
    );
  
}

export default Sort;
