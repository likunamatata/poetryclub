import React from "react";
import styles from '../../styles/Search.module.css'

function SearchBar (props) {
    return (
      <div className={styles.container}>
        <form className={styles.authForm} onSubmit={(e) => {
          e.preventDefault();
          props.handleSearch();
        }} >
        <input className={styles.input} name="keyword" type="text" placeholder="Search" onChange={props.handleChange} />
  
          </form>
      </div>
    );
  }

export default SearchBar;
