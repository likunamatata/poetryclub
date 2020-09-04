import React from "react";
import styles from '../../styles/Search.module.css'

function SearchBar(props) {
    return (
      <div className={styles.container}>
        <form className={styles.authForm} onSubmit={(e) => {
          e.preventDefault();
          // REMOVED SEARCH OPTION. NO NEED FOR THIS SUBMIT BTN OR FUNCTION
          // SEARCHING ON CHANGE NOW
          // props.handleSearch();
        }} >
          <input
            className={styles.input}
            name="keyword"
            type="text"
<<<<<<< HEAD
            onChange={props.handleChange}
          />
          { window.location.pathname === '/search' ?
            <input className={styles.submit} type="submit" value="Search" />
            :
=======
            onChange={props.handleChange} />
          {/* TERNARY IF WE DECIDE THE SEARCH SHOULD GO BACK ON THE FEED */}
          {/* { window.location.pathname === '/search' ? */}
            <button className={styles.submit} type="submit">Search</button>
            {/* :
>>>>>>> 2dd608ba15bb038b8f3ae63e273e85216570cdae
            null
          } */}
        </form>
      </div>
    );
  }

export default SearchBar;
