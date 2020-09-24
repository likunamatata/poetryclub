import React, { useEffect, useRef } from "react";
import styles from '../../styles/Search.module.css'

function SearchBar(props) {

  const inputRef = useRef();

  // FOR CURSOR ON EDITOR
  useEffect(() => {
    inputRef.current.focus();
  },[])


  return (
    <div className={styles.container}>
      <form className={styles.authForm} onSubmit={(e) => {
        e.preventDefault();
        // REMOVED SEARCH OPTION. NO NEED FOR THIS SUBMIT BTN OR FUNCTION
        // SEARCHING ON CHANGE NOW. But uncomment below if needed.
        // props.handleSearch();
      }} >
        <input
          className={styles.input}
          name="keyword"
          type="text"
          ref={inputRef}
          onChange={props.handleChange}
        />
        {window.location.pathname === '/search' ?
          <input className={styles.submit} type="submit" value="Search" />
          :
          null
        }
      </form>
    </div>
  );
}

export default SearchBar;
