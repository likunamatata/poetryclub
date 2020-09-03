import React from "react";
import styles from '../../styles/Search.module.css'

function SearchBar(props) {
    return (
      <div className={styles.container}>
        <form className={styles.authForm} onSubmit={(e) => {
          e.preventDefault();
          // props.handleSearch();
        }} >
          <input
            className={styles.input}
            name="keyword"
            type="text"
            // onChange={props.handleChange}
            onChange={props.handleChange}
          />
          { window.location.pathname === '/search' ?
            <input className={styles.submit} type="submit" value="Search" />
            :
            null
          }
        </form>
      </div>
    );
  }

export default SearchBar;
