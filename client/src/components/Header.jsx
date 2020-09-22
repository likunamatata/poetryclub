import React,{useState} from "react";
import { Link } from 'react-router-dom'
import PoemLargeModal from "./widgets/modals-and-materials/PoemLargeModal";

export default function Header(props) {

  const [shareIcons, showIcons] = useState(false)

  const moreOptionsIcon = props.currentUser ? (
    // <button className="logout" onClick={props.handleLogout}>
    //   Logout
    // </button>
    <svg onClick={props.showPoemLargeOptions} width="28" height="5" viewBox="0 0 28 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.046875 2.39844C0.046875 1.89062 0.222656 1.47396 0.574219 1.14844C0.932292 0.822917 1.39453 0.660156 1.96094 0.660156C2.54036 0.660156 3.00586 0.819661 3.35742 1.13867C3.70898 1.45768 3.88477 1.8776 3.88477 2.39844C3.88477 2.91927 3.70573 3.33919 3.34766 3.6582C2.99609 3.97721 2.53385 4.13672 1.96094 4.13672C1.38802 4.13672 0.925781 3.97721 0.574219 3.6582C0.222656 3.33919 0.046875 2.91927 0.046875 2.39844ZM12.0586 2.39844C12.0586 1.89062 12.2344 1.47396 12.5859 1.14844C12.944 0.822917 13.4062 0.660156 13.9727 0.660156C14.5521 0.660156 15.0176 0.819661 15.3691 1.13867C15.7207 1.45768 15.8965 1.8776 15.8965 2.39844C15.8965 2.91927 15.7174 3.33919 15.3594 3.6582C15.0078 3.97721 14.5456 4.13672 13.9727 4.13672C13.3997 4.13672 12.9375 3.97721 12.5859 3.6582C12.2344 3.33919 12.0586 2.91927 12.0586 2.39844ZM24.0703 2.39844C24.0703 1.89062 24.2461 1.47396 24.5977 1.14844C24.9557 0.822917 25.418 0.660156 25.9844 0.660156C26.5638 0.660156 27.0293 0.819661 27.3809 1.13867C27.7324 1.45768 27.9082 1.8776 27.9082 2.39844C27.9082 2.91927 27.7292 3.33919 27.3711 3.6582C27.0195 3.97721 26.5573 4.13672 25.9844 4.13672C25.4115 4.13672 24.9492 3.97721 24.5977 3.6582C24.2461 3.33919 24.0703 2.91927 24.0703 2.39844Z" fill="black" />
    </svg>
  ) : (
      ""
    );
  
  const toggleShareIcons = () => {
    showIcons(prevShare => {
      return !prevShare
    })
  }
  
  return (
    <div className="header">
      {/* <div className="menu-container">{logout}</div> */}
      <div className="menu-container">{moreOptionsIcon}</div>
      <Link to="/" className="title">The Poem Club</Link>

      <PoemLargeModal
        poemLargeOptions={props.poemLargeOptions}
        showPoemLargeOptions={props.showPoemLargeOptions}
        showIcons={toggleShareIcons}
        hideIcons={toggleShareIcons}
        shareIcons={shareIcons}
      />

    </div >
  );
}
