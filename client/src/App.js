import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import "./App.css";

import Landing from "./components/Landing";
import Header from "./components/Header";

import {
  loginUser,
  registerUser,
  verifyUser
} from './services/auth-helpers'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      authFormData: {
        username: '',
        email: "",
        password: "",
      },
    };
  }

  // -------------- AUTH ------------------ //
  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
  };

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
    this.props.history.push("/welcome");
  };

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null,
    });
    this.props.history.push("/");
  };

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value,
      },
    }));
  };

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({
        currentUser,
      });
    }
  };

  componentDidMount = () => {
    this.handleVerify();
  };

  render() {
    return (
      <div className="App">
        <Header
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
          history={this.props.history}
        />

        {!this.state.currentUser ? (
          //logged out landing page
            <Route
              exact
              path="/"
              render={() => (
                <Landing
                  history={this.props.history}
                  handleLogin={this.handleLogin}
                  handleChange={this.authHandleChange}
                  formData={this.state.authFormData}
                  currentUser={this.state.currentUser}
                  handleRegister={this.handleRegister}
                />
              )}
            />

        ) : (
          //screens to show when logged in
          <></>
        )}
      </div>
    );
  }
}

export default withRouter(App);