import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import PublicScreens from "./components/PublicRoutes";
import Header from "./components/Header";
import Routes from "./components/Routes";
import Nav from "./components/Nav";
import { loginUser, registerUser, verifyUser } from "./services/auth-helpers";
import {sendEmail} from './services/email-helper'
// import emailjs from 'emailjs-com'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      deleted: false,
      currentUser: null,
      poemLargeOptions: false,
      mainOptions: false,
      editClicked: false,
      registerFormData: { // for registration email
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
  // -------------- FOR RENDERING THE FEED ON NEW POEM SUBMISSION ------------------ //

  updateSubmittedState = () => {
    this.setState({ submitted: !this.state.submitted })
  }
  updateDeletedState = () => {
    this.setState({ deleted: !this.state.deleted })
  }
  updateEditClicked = (boolean) => {
    this.setState({ editClicked: boolean })
  }

  togglePoemLargeOptions = () => {
    this.setState(prevState => ({
      poemLargeOptions: !prevState.poemLargeOptions
    }))
  }
  toggleMainOptions = () => {
    this.setState(prevState => ({
      mainOptions: !prevState.mainOptions
    }))
  }
  // -------------- AUTH ------------------ //
  handleLogin = async () => {
    const currentUser = await loginUser(this.state.loginFormData);
    this.setState({ currentUser });
  };

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.registerFormData);
    await sendEmail(this.state.registerFormData) //send email
    this.setState({ currentUser });
    this.props.history.push("/feed");
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
          showPoemLargeOptions={this.togglePoemLargeOptions}
          poemLargeOptions={this.state.poemLargeOptions}
          showMainOptions={this.toggleMainOptions}
          mainOptions={this.state.mainOptions}
          currentUser={this.state.currentUser}
          history={this.props.history}
          updateEditClicked={this.updateEditClicked}
          submitted={this.state.submitted}
          updateDeletedState={this.updateDeletedState}
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
              handleRegister={this.handleRegister}
            />

          ) : (
              //screens to show when logged in
              <Routes
                history={this.props.history}
                currentUser={this.state.currentUser}
                submitted={this.state.submitted}
                deleted={this.state.deleted}
                updateEditClicked={this.updateEditClicked}
                editClicked={this.state.editClicked}
                updateSubmittedState={this.updateSubmittedState}
                updateDeletedState={this.updateDeletedState}
              />
            )}
        </div>
        {!this.state.currentUser ? "" : <Nav />}
      </div>
    );
  }
}

export default withRouter(App);
