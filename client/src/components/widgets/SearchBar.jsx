import React from "react";
import styles from '../../styles/Search.module.css'

function SearchBar(props) {
    return (
      <div className={styles.container}>
        <form className={styles.authForm} onSubmit={(e) => {
          e.preventDefault();
          props.handleSearch();
        }} >
          <input
            className={styles.input}
            name="keyword"
            type="text"
            onChange={props.handleChange} />
          {/* TERNARY IF WE DECIDE THE SEARCH SHOULD GO BACK ON THE FEED */}
          {/* { window.location.pathname === '/search' ? */}
            <button className={styles.submit} type="submit">Search</button>
            {/* :
            null
          } */}
        </form>
      </div>
    );
  }

export default SearchBar;
