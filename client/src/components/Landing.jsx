import React from "react";
import Login from "./auth/Login";
import Register from "./auth/Register";

export default function Landing(props) {
  const { 
    history,
    handleLogin,
    loginHandleChange,
    registerHandleChange,
    loginFormData,
    registerFormData,
    handleRegister,
    unauthorizedUser
  } = props;


  return (
    <div className='landing'>
      <Login
        handleChange={loginHandleChange}
        handleLogin={handleLogin}
        history={history}
        formData={loginFormData}
        unauthorizedUser={unauthorizedUser}
      />
      <Register
        handleChange={registerHandleChange}
        handleRegister={handleRegister}
        history={history}
        formData={registerFormData}
      />
    </div>
  );
}
