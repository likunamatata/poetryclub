import React from 'react'
import { Route } from 'react-router-dom'

function UserScreens(props) {
  return (
    <div className='user-screens'>

      {/* <Route exact path="/"
        render={() => (
          <div>
            <Home currentUser={props.currentUser} history={props.history} />
          </div>
        )}
      /> */}

      {/* <Route exact path="/welcome"
        render={() => (
          <div>
            <Welcome />
          </div>
        )}
      /> */}

    </div>
  )

}


export default UserScreens;
