import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { destroyPoem } from '../../../services/poem-helpers'

export default function AreYouSureMsg(props) {

  const location = useLocation()
  const poemID = location.pathname.substring(7)
  const history = useHistory()
  console.log(history)

  return (
    <div className='dialogue-box'>
      <p className='dialogue-msg'>Are you sure you want to delete this poem?</p>
      <div className='dialogue-buttons'>
        <button id='yes' onClick={() => {
          destroyPoem(poemID);
          props.hidePoemLargeOptions();
          history.push('/')
        }}>yes</button>
        <button id="cancel" onClick={() => props.hidePoemLargeOptions()}>cancel</button>

      </div>
    </div>
  )
}
