import React from 'react'

export default function AreYouSureMsg() {
  return (
    <div className='dialogue-box'>
      <p className='dialogue-msg'>Are you sure you want to delete this poem?</p>
      <div className='dialogue-buttons'>
        <button id='yes'>yes</button>
        <button id="cancel">cancel</button>
      </div>
    </div>
  )
}
