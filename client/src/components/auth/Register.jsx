import React, { Component } from "react";

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
        <form className="auth-form" onSubmit={this.props.handleRegister}>
          <input
            name="username"
            type="text"
            placeholder="Enter your username"
            value={this.props.formData.username}
            onChange={this.props.handleChange}
          />
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={this.props.formData.email}
            onChange={this.props.handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={this.props.formData.password}
            onChange={this.props.handleChange}
          />
          <p className="password-min">
            password must contain a minimum of 8 characters and at least 1
            special character
          </p>
          <button onClick={this.props.handleRegister}>Go</button>
        </form>
      </div>
    );
  }
}

export default Register;
