import React, { Component } from 'react'
// import styles from '../../styles/PoemsContainer.module.css'
import styles from "../../styles/Poem.module.css";
import { Link } from 'react-router-dom';


class PoemsLiked extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const { likes, currentUser } = this.props


    const likesData = likes.filter((liked) => liked.user_id === currentUser.id)


    const likedPoems = likesData.map((poem, id) => {
      const textParsed = JSON.parse(poem.text).blocks[0].text
      return (
        <div key={id} className={styles.poem}>
          <Link to={`/poems/${poem.poem_id}`}>
            <p>{poem.title}</p>
            <p className={styles.poemSnippet}>{`${textParsed}...`}</p>
            <p>{`By ${poem.username}`}</p>
          </Link>
          <hr />
        </div >

      )
    })

    return (
      <>
        {likedPoems}
      </>
    );
  }
}


export default PoemsLiked