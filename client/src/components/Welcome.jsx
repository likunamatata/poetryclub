import React, {Component} from 'react'

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: []
    }
  }


   
  render() {

    return (
      <div className='welcome'>
         <h1>You're all set. go make a poetry now</h1>
      </div>
    )
    
  }
 
}

export default Welcome;