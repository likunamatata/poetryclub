import React from 'react';

const Login = (props) => {
  return (
    <div className='auth-container'>

      {props.currentUser ?
        '' :
        <div className='login'>


          
        <form className='auth-form' onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin();
          props.history.push('/');
        }} >
          <input name="email" type="text" placeholder="Enter your email" value={props.formData.email} onChange={props.handleChange} />
          <input name="password" type="password" placeholder="Enter your password" value={props.formData.password} onChange={props.handleChange} />
    
            <button>Login</button>


          </form>
        </div>
      }
    </div>
  )
}

export default Login;