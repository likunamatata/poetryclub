import React, { Component } from "react";
import styles from "../../styles/Landing.module.css"
import cx from 'classnames'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secretKeys: [],
    };
  }

  render() {
    return (
      <div className="register">
        <form className={styles.authForm} onSubmit={this.props.handleRegister}>
          <input
            className={styles.input}
            name="username"
            type="text"
            placeholder="Username"
            value={this.props.formData.username}
            onChange={this.props.handleChange}
          />
          <input
            className={styles.input}
            name="email"
            type="text"
            placeholder="Email"
            value={this.props.formData.email}
            onChange={this.props.handleChange}
          />
          <input
            className={styles.input}
            name="password"
            type="password"
            placeholder="Password"
            value={this.props.formData.password}
            onChange={this.props.handleChange}
          />
          <button className={cx(styles.button, styles.registerButton)} onClick={this.props.handleRegister}>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
