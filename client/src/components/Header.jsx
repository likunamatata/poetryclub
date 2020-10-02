import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from 'react-router-dom'
import { getUserPoems} from '../services/poem-helpers'
import PoemLargeModal from "./widgets/modals-and-materials/PoemLargeModal";
import MainModal from "./widgets/modals-and-materials/MainModal"

export default function Header(props) {

  const [userPoemIDs, setPoemIDs] = useState([])
  const [plIcons, togglePLIcons] = useState(true)
  const [shareIcons, toggleShareIcons] = useState(false)
  const [deleteMsg, toggleDeleteMsg] = useState(false)

  const location = useLocation()
  const pathname = location.pathname.substring(0, 6)
  const history = useHistory()

  useEffect(() => {
    props.currentUser && loggedInUserPoems(props.currentUser.id)
  }, [props.currentUser, props.submitted])

  const loggedInUserPoems = async (id) => {
    const poems = await getUserPoems(id)
    // build an array of loggedin user poem ids
    const poemIDs = poems.map(poem => poem.id)
    setPoemIDs(poemIDs)
  }

  const moreOptionsIcon = pathname === '/poems' ?
    (
      // KEBAB MENU ICON
      < svg onClick={props.showPoemLargeOptions} width="28" height="5" viewBox="0 0 28 5" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M0.046875 2.39844C0.046875 1.89062 0.222656 1.47396 0.574219 1.14844C0.932292 0.822917 1.39453 0.660156 1.96094 0.660156C2.54036 0.660156 3.00586 0.819661 3.35742 1.13867C3.70898 1.45768 3.88477 1.8776 3.88477 2.39844C3.88477 2.91927 3.70573 3.33919 3.34766 3.6582C2.99609 3.97721 2.53385 4.13672 1.96094 4.13672C1.38802 4.13672 0.925781 3.97721 0.574219 3.6582C0.222656 3.33919 0.046875 2.91927 0.046875 2.39844ZM12.0586 2.39844C12.0586 1.89062 12.2344 1.47396 12.5859 1.14844C12.944 0.822917 13.4062 0.660156 13.9727 0.660156C14.5521 0.660156 15.0176 0.819661 15.3691 1.13867C15.7207 1.45768 15.8965 1.8776 15.8965 2.39844C15.8965 2.91927 15.7174 3.33919 15.3594 3.6582C15.0078 3.97721 14.5456 4.13672 13.9727 4.13672C13.3997 4.13672 12.9375 3.97721 12.5859 3.6582C12.2344 3.33919 12.0586 2.91927 12.0586 2.39844ZM24.0703 2.39844C24.0703 1.89062 24.2461 1.47396 24.5977 1.14844C24.9557 0.822917 25.418 0.660156 25.9844 0.660156C26.5638 0.660156 27.0293 0.819661 27.3809 1.13867C27.7324 1.45768 27.9082 1.8776 27.9082 2.39844C27.9082 2.91927 27.7292 3.33919 27.3711 3.6582C27.0195 3.97721 26.5573 4.13672 25.9844 4.13672C25.4115 4.13672 24.9492 3.97721 24.5977 3.6582C24.2461 3.33919 24.0703 2.91927 24.0703 2.39844Z" fill="black" />
      </svg >
    ) :
    (
      // HAMBURGER MENU ICON
      <svg onClick={props.showMainOptions} width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.88104 5.20356C5.06696 5.20356 6.1774 4.56368 6.78124 3.53348C7.01924 3.12616 7.45512 2.87388 7.91956 2.87388C8.38808 2.87388 8.82328 3.12412 9.05856 3.53348C9.66172 4.56368 10.7735 5.20356 11.9622 5.20356C13.1481 5.20356 14.2585 4.56368 14.8624 3.53212C15.0997 3.12616 15.5356 2.87388 16.0007 2.87388C16.474 2.87388 16.8983 3.11936 17.1376 3.53144C17.7388 4.563 18.8512 5.20356 20.0419 5.20356C21.2299 5.20356 22.3417 4.56368 22.9428 3.5328C23.1808 3.12616 23.616 2.87388 24.0811 2.87388C24.5483 2.87388 24.9842 3.12548 25.2208 3.53212C25.8226 4.56368 26.933 5.20356 28.119 5.20356C29.3103 5.20356 30.4228 4.563 31.0232 3.53076C31.3061 3.04388 31.1409 2.41964 30.654 2.13608C30.1678 1.85388 29.5422 2.01844 29.2593 2.50532C29.0234 2.91128 28.5861 3.16356 28.119 3.16356C27.6552 3.16356 27.2207 2.91128 26.984 2.50532C26.385 1.47444 25.2725 0.833878 24.0811 0.833878C22.8945 0.833878 21.7834 1.47308 21.1809 2.50396C20.9436 2.91128 20.507 3.16356 20.0419 3.16356C19.5748 3.16356 19.1375 2.91128 18.9016 2.50532C18.3025 1.47444 17.1907 0.833878 16.0007 0.833878C14.8127 0.833878 13.7016 1.47376 13.1012 2.5026C12.8625 2.9106 12.4259 3.16356 11.9622 3.16356C11.4957 3.16356 11.0578 2.9106 10.8232 2.5094C10.2282 1.4758 9.11568 0.833878 7.91956 0.833878C6.73364 0.833878 5.62252 1.47308 5.02072 2.5026C4.78204 2.9106 4.34548 3.16356 3.88172 3.16356C3.4166 3.16356 2.98004 2.9106 2.74272 2.50396C2.45848 2.0164 1.83424 1.85184 1.34736 2.13744C0.861162 2.421 0.696603 3.04592 0.980843 3.53212C1.58196 4.56368 2.69376 5.20356 3.88104 5.20356Z" fill="black" />
        <path d="M30.652 8.11668C30.1658 7.83516 29.5402 7.99836 29.2573 8.48592C29.0207 8.89256 28.5841 9.14484 28.117 9.14484C27.6532 9.14484 27.2187 8.89188 26.9814 8.48524C26.3816 7.45504 25.2698 6.81516 24.0791 6.81516C22.8932 6.81516 21.7827 7.45368 21.1789 8.48456C20.9409 8.89188 20.505 9.14484 20.0399 9.14484C19.5728 9.14484 19.1362 8.89256 18.8989 8.48524C18.2991 7.45504 17.188 6.81516 15.9987 6.81516C14.8114 6.81516 13.7003 7.45436 13.0991 8.4832C12.8605 8.8912 12.4239 9.14484 11.9601 9.14484C11.4937 9.14484 11.0557 8.8912 10.8205 8.48932C10.2248 7.4564 9.11231 6.81516 7.91755 6.81516C6.73231 6.81516 5.62187 7.45368 5.01871 8.4832C4.78003 8.8912 4.34347 9.14484 3.87971 9.14484C3.41459 9.14484 2.97871 8.89188 2.74071 8.48456C2.45647 7.997 1.83223 7.83244 1.34535 8.11804C0.859148 8.4016 0.694589 9.02652 0.978829 9.51272C1.58063 10.5443 2.69243 11.1848 3.87971 11.1848C5.06495 11.1848 6.17607 10.545 6.77923 9.51476C7.01791 9.10744 7.45379 8.85516 7.91823 8.85516C8.38607 8.85516 8.82195 9.1054 9.05723 9.51408C9.66039 10.545 10.7729 11.1848 11.9608 11.1848C13.1461 11.1848 14.2572 10.545 14.861 9.5134C15.0983 9.10744 15.5349 8.85516 16 8.85516C16.4726 8.85516 16.8976 9.10064 17.137 9.51204C17.7381 10.5443 18.8513 11.1848 20.0413 11.1848C21.2285 11.1848 22.3403 10.5443 22.9415 9.51408C23.1801 9.10744 23.616 8.85516 24.0805 8.85516C24.5476 8.85516 24.9835 9.10676 25.2201 9.51272C25.8219 10.5443 26.9324 11.1848 28.1183 11.1848C29.3097 11.1848 30.4222 10.5436 31.0226 9.51136C31.3041 9.02448 31.1389 8.40024 30.652 8.11668Z" fill="black" />
        <path d="M30.652 14.098C30.1658 13.8164 29.5402 13.9796 29.2573 14.4672C29.0207 14.8738 28.5841 15.1261 28.117 15.1261C27.6532 15.1261 27.2187 14.8732 26.982 14.4672C26.3823 13.4363 25.2698 12.7964 24.0791 12.7964C22.8925 12.7964 21.7821 13.4356 21.1789 14.4658C20.9409 14.8732 20.505 15.1261 20.0399 15.1261C19.5728 15.1261 19.1362 14.8738 18.8995 14.4672C18.2998 13.4363 17.1887 12.7964 15.9987 12.7964C14.8107 12.7964 13.6996 13.4356 13.0991 14.4645C12.8605 14.8725 12.4239 15.1261 11.9601 15.1261C11.4937 15.1261 11.0557 14.8725 10.8211 14.4706C10.2261 13.4377 9.11367 12.7964 7.91755 12.7964C6.73163 12.7964 5.62119 13.4356 5.01871 14.4645C4.78003 14.8725 4.34347 15.1261 3.87971 15.1261C3.41459 15.1261 2.97871 14.8732 2.74071 14.4658C2.45647 13.9776 1.83223 13.813 1.34535 14.0993C0.859148 14.3829 0.694589 15.0078 0.978829 15.494C1.58063 16.5256 2.69243 17.1661 3.87971 17.1661C5.06495 17.1661 6.17607 16.5262 6.77923 15.4954C7.01723 15.0887 7.45379 14.8364 7.91755 14.8364C8.38607 14.8364 8.82127 15.0867 9.05655 15.4954C9.65971 16.5262 10.7722 17.1661 11.9601 17.1661C13.1454 17.1661 14.2565 16.5262 14.8603 15.4947C15.097 15.0887 15.5335 14.8364 15.9987 14.8364C16.4719 14.8364 16.8963 15.0812 17.1356 15.4933C17.7367 16.5256 18.8499 17.1661 20.0399 17.1661C21.2272 17.1661 22.339 16.5256 22.9408 15.4954C23.1781 15.0887 23.614 14.8364 24.0791 14.8364C24.5463 14.8364 24.9821 15.088 25.2188 15.494C25.8206 16.5256 26.931 17.1661 28.117 17.1661C29.3083 17.1661 30.4208 16.5249 31.0212 15.4926C31.3041 15.0058 31.1389 14.3815 30.652 14.098Z" fill="black" />
      </svg>
    )


  return (
    <div className="header">
     
      <div className='sub-header'>
        {/* BACK BTN ICON */}
        <svg
          className='back-icon'
          style={props.currentUser ? { visibility: 'visible' } : { visibility: 'hidden' }}
          onClick={() => history.goBack()}
          width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M14.3994 1.24459C14.2955 1.24528 14.1959 1.28801 14.1217 1.36374L5.32171 10.0998C5.28259 10.1386 5.25145 10.1853 5.23018 10.237C5.20891 10.2887 5.19794 10.3444 5.19794 10.4006C5.19794 10.4569 5.20891 10.5125 5.23018 10.5643C5.25145 10.616 5.28259 10.6627 5.32171 10.7015L14.1217 19.4375C14.1596 19.4758 14.2044 19.506 14.2535 19.5262C14.3027 19.5464 14.3552 19.5563 14.4081 19.5553C14.4609 19.5543 14.513 19.5424 14.5614 19.5203C14.6098 19.4982 14.6535 19.4664 14.69 19.4266C14.7265 19.3869 14.7551 19.34 14.7741 19.2887C14.793 19.2374 14.802 19.1827 14.8005 19.1277C14.7991 19.0728 14.7871 19.0187 14.7654 18.9686C14.7437 18.9184 14.7127 18.8733 14.6741 18.8357L6.17715 10.4006L14.6741 1.96551C14.7332 1.90848 14.7743 1.83423 14.7921 1.75247C14.8099 1.67071 14.8036 1.58527 14.7739 1.50733C14.7442 1.4294 14.6925 1.36262 14.6257 1.31574C14.5589 1.26885 14.48 1.24405 14.3994 1.24459Z" fill="black" />
          <path fillRule="evenodd" clipRule="evenodd" d="M14.3994 1.24459C14.2955 1.24528 14.1959 1.28801 14.1217 1.36374L5.32171 10.0998C5.28259 10.1386 5.25145 10.1853 5.23018 10.237C5.20891 10.2887 5.19794 10.3444 5.19794 10.4006C5.19794 10.4569 5.20891 10.5125 5.23018 10.5643C5.25145 10.616 5.28259 10.6627 5.32171 10.7015L14.1217 19.4375C14.1596 19.4758 14.2044 19.506 14.2535 19.5262C14.3027 19.5464 14.3552 19.5563 14.4081 19.5553C14.4609 19.5543 14.513 19.5424 14.5614 19.5203C14.6098 19.4982 14.6535 19.4664 14.69 19.4266C14.7265 19.3869 14.7551 19.34 14.7741 19.2887C14.793 19.2374 14.802 19.1827 14.8005 19.1277C14.7991 19.0728 14.7871 19.0187 14.7654 18.9686C14.7437 18.9184 14.7127 18.8733 14.6741 18.8357L6.17715 10.4006L14.6741 1.96551C14.7332 1.90848 14.7743 1.83423 14.7921 1.75247C14.8099 1.67071 14.8036 1.58527 14.7739 1.50733C14.7442 1.4294 14.6925 1.36262 14.6257 1.31574C14.5589 1.26885 14.48 1.24405 14.3994 1.24459Z" fill="black" />
        </svg>
        <Link to="/" className="title">The Poem Club</Link>
        { props.currentUser &&
        <div className="menu-container">{moreOptionsIcon}</div>
        }
        
        
      </div>
     
      { !props.mainOptions ?
        <PoemLargeModal
          poemLargeOptions={props.poemLargeOptions}
          hidePoemLargeOptions={props.showPoemLargeOptions}
          toggleShareIcons={toggleShareIcons}
          shareIcons={shareIcons}
          toggleDeleteMsg={toggleDeleteMsg}
          deleteMsg={deleteMsg}
          togglePLIcons={togglePLIcons}
          plIcons={plIcons}
          updateEditClicked={props.updateEditClicked}
          userPoemIDs={userPoemIDs}
          updateDeletedState={props.updateDeletedState}
        />
        :
        <MainModal
          hideMainOptions={props.showMainOptions}
          mainOptions={props.mainOptions}
          handleLogout={props.handleLogout}
        />
      }
    </div >
  );
}
