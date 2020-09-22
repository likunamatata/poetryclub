import React from 'react'
import MainOptionIcons from './MainOptionIcons'

export default function MainModal(props) {
  return (
    <div className="w3-modal w3-animate-opacity" style={props.mainOptions ? { display: 'block' } : { display: 'none' }}>
      <div className="w3-modal-content w3-card-1">
        <header className="w3-container w3-white">
          <svg onClick={() => {
            props.hideMainOptions()
          }}
            width="43" height="54" viewBox="0 0 43 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.6699 12.9094L30.1498 11.3823L21.4999 20.0729L12.8501 11.3823L11.33 12.9094L19.9799 21.6L11.33 30.2905L12.8501 31.8176L21.4999 23.1271L30.1498 31.8176L31.6699 30.2905L23.02 21.6L31.6699 12.9094Z" fill="black" />
          </svg>
        </header>

        <div className='menu-option-icon-wrapper'>
          <MainOptionIcons
            hideMainOptions={props.hideMainOptions}
            handleLogout={props.handleLogout}
          />
        </div>

      </div>
    </div>
  )
}
