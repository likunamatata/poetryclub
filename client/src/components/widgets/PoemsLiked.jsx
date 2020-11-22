// import React, { Component } from 'react'
// import PoemSmall from './PoemSmall'

// class PoemsLiked extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {

//     const { likes, currentUser, getPoemsAndLikes } = this.props


//     const likesData = likes.filter((liked) => liked.user_id === currentUser.id)


//     const likedPoems = likesData.map((poem, id) => (
//       <PoemSmall poem={poem} key={id} currentUser={currentUser} getPoemsAndLikes={getPoemsAndLikes} />
//     ))

//     return (
//       <>
//         {likedPoems}
//       </>
//     );
//   }
// }


// export default PoemsLiked