import React from 'react';
import styles from "../../styles/Landing.module.css"
import cx from 'classnames'

const Login = (props) => {
  return (
 
    <div className='login'>
      
        <form className={styles.authForm} onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin();
          props.history.push('/');
        }} >
        <input className={styles.input} name="username" type="text" placeholder="Enter your email" value={props.formData.username} onChange={props.handleChange} />
          <input className={styles.input} name="password" type="password" placeholder="Enter your password" value={props.formData.password} onChange={props.handleChange} />
    
            <button className={ cx(styles.button, styles.loginButton) }>Login</button>


          </form>
        </div>

  )
}

export default Login;