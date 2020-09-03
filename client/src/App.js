import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import "./App.css";

import Landing from "./components/Landing";
import Header from "./components/Header";
import Routes from "./components/Routes";
import Nav from "./components/Nav";

import { loginUser, registerUser, verifyUser } from "./services/auth-helpers";
import PublicScreens from "./components/PublicRoutes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      registerFormData: {
        username: "",
        email: "",
        password: ""
      },
      loginFormData: {
        username: "",
        password: ""
      },
    };
  }

  // -------------- AUTH ------------------ //
  handleLogin = async () => {
    const currentUser = await loginUser(this.state.loginFormData);
    this.setState({ currentUser });
  };

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.registerFormData);
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

  loginHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      loginFormData: {
        ...prevState.loginFormData,
        [name]: value,
      },
    }));
  };

  registerHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      registerFormData: {
        ...prevState.registerFormData,
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
        <div className="main">
          {!this.state.currentUser ? (
            //logged out landing page
            <PublicScreens
              history={this.props.history}
              handleLogin={this.handleLogin}
              loginHandleChange={this.loginHandleChange}
              registerHandleChange={this.registerHandleChange}
              loginFormData={this.state.loginFormData}
              registerFormData={this.state.registerFormData}
              currentUser={this.state.currentUser}
              handleRegister={this.handleRegister} />

          ) : (
              //screens to show when logged in
              <Routes
                history={this.props.history}
                currentUser={this.state.currentUser}
              />
            )}
        </div>
        {!this.state.currentUser ? "" : <Nav />}
      </div>
    );
  }
}

export default withRouter(App);
