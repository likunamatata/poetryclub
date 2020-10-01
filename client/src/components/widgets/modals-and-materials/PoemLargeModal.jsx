import React from 'react'
import AreYouSureMsg from './AreYouSureMsg'
import PLOptionIcons from './PLOptionIcons'
import SocialShareIcons from './SocialShareIcons'

export default function PoemLargeModal(props) {

  return (
    <div
      className="w3-modal w3-animate-opacity"
      style={props.poemLargeOptions ? { display: 'block' } : { display: 'none' }}
    >
      <div className="w3-modal-content w3-card-1">
        <header className="header-container">
          {/* BACK ICON */}
          <span
            style={props.shareIcons ? { height: '26px' } : { visibility: 'hidden' }}
            onClick={() => {
              props.toggleShareIcons(false)
              props.togglePLIcons(true);
            }}
          >
            <svg width="20" height="26" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.3994 1.24459C14.2955 1.24528 14.1959 1.28801 14.1217 1.36374L5.32171 10.0998C5.28259 10.1386 5.25145 10.1853 5.23018 10.237C5.20891 10.2887 5.19794 10.3444 5.19794 10.4006C5.19794 10.4569 5.20891 10.5125 5.23018 10.5643C5.25145 10.616 5.28259 10.6627 5.32171 10.7015L14.1217 19.4375C14.1596 19.4758 14.2044 19.506 14.2535 19.5262C14.3027 19.5464 14.3552 19.5563 14.4081 19.5553C14.4609 19.5543 14.513 19.5424 14.5614 19.5203C14.6098 19.4982 14.6535 19.4664 14.69 19.4266C14.7265 19.3869 14.7551 19.34 14.7741 19.2887C14.793 19.2374 14.802 19.1827 14.8005 19.1277C14.7991 19.0728 14.7871 19.0187 14.7654 18.9686C14.7437 18.9184 14.7127 18.8733 14.6741 18.8357L6.17715 10.4006L14.6741 1.96551C14.7332 1.90848 14.7743 1.83423 14.7921 1.75247C14.8099 1.67071 14.8036 1.58527 14.7739 1.50733C14.7442 1.4294 14.6925 1.36262 14.6257 1.31574C14.5589 1.26885 14.48 1.24405 14.3994 1.24459Z" fill="black" />
              <path fillRule="evenodd" clipRule="evenodd" d="M14.3994 1.24459C14.2955 1.24528 14.1959 1.28801 14.1217 1.36374L5.32171 10.0998C5.28259 10.1386 5.25145 10.1853 5.23018 10.237C5.20891 10.2887 5.19794 10.3444 5.19794 10.4006C5.19794 10.4569 5.20891 10.5125 5.23018 10.5643C5.25145 10.616 5.28259 10.6627 5.32171 10.7015L14.1217 19.4375C14.1596 19.4758 14.2044 19.506 14.2535 19.5262C14.3027 19.5464 14.3552 19.5563 14.4081 19.5553C14.4609 19.5543 14.513 19.5424 14.5614 19.5203C14.6098 19.4982 14.6535 19.4664 14.69 19.4266C14.7265 19.3869 14.7551 19.34 14.7741 19.2887C14.793 19.2374 14.802 19.1827 14.8005 19.1277C14.7991 19.0728 14.7871 19.0187 14.7654 18.9686C14.7437 18.9184 14.7127 18.8733 14.6741 18.8357L6.17715 10.4006L14.6741 1.96551C14.7332 1.90848 14.7743 1.83423 14.7921 1.75247C14.8099 1.67071 14.8036 1.58527 14.7739 1.50733C14.7442 1.4294 14.6925 1.36262 14.6257 1.31574C14.5589 1.26885 14.48 1.24405 14.3994 1.24459Z" fill="black" />
            </svg>
          </span>
          {/* CLOSE MODAL ICON */}
          <svg onClick={() => {
            props.hidePoemLargeOptions()
            props.togglePLIcons(true);
            props.toggleDeleteMsg(false)
            props.toggleShareIcons(false)
          }}
            width="43" height="54" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.6699 12.9094L30.1498 11.3823L21.4999 20.0729L12.8501 11.3823L11.33 12.9094L19.9799 21.6L11.33 30.2905L12.8501 31.8176L21.4999 23.1271L30.1498 31.8176L31.6699 30.2905L23.02 21.6L31.6699 12.9094Z" fill="black" />
          </svg>
        </header>

        <div className='poemlarge-option-icon-wrapper'>
          {props.plIcons &&
            <PLOptionIcons
              toggleShareIcons={props.toggleShareIcons}
              hidePoemLargeOptions={props.hidePoemLargeOptions}
              toggleDeleteMsg={props.toggleDeleteMsg}
              togglePLIcons={props.togglePLIcons}
              updateEditClicked={props.updateEditClicked}
              userPoemIDs={props.userPoemIDs}
            />
          }
          {props.shareIcons && <SocialShareIcons />}
          {props.deleteMsg &&
            <AreYouSureMsg
              hidePoemLargeOptions={props.hidePoemLargeOptions}
              togglePLIcons={props.togglePLIcons}
              toggleDeleteMsg={props.toggleDeleteMsg}
              updateDeletedState={props.updateDeletedState}
            />}
        </div>

      </div>
    </div >
  )
}
