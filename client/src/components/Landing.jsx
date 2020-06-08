import React from "react";
import Login from "./auth/Login";
import Register from "./auth/Register";

export default function Landing(props) {
  const {
    history,
    handleLogin,
    handleChange,
    formData,
    currentUser,
    handleRegister,
  } = props;

  return (
    <div className="landing">
      <Login
        handleChange={handleChange}
        handleLogin={handleLogin}
        history={history}
        formData={formData}
      />
      <Register
        handleChange={handleChange}
        handleRegister={handleRegister}
        history={history}
        formData={formData}
      />
    </div>
  );
}
