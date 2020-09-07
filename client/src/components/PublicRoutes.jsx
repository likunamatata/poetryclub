import React from "react";
import { Route } from "react-router-dom";

import PoemLarge from "./widgets/PoemLarge";
import Landing from "./Landing"

function PublicScreens(props) {
  const currentUser = props.currentUser
  return (
    <div >

      {/* Feed */}

      {/* Search */}
      <Route
        exact
        path="/"
        render={() => (
          <Landing
            history={props.history}
            handleLogin={props.handleLogin}
            loginHandleChange={props.loginHandleChange}
            registerHandleChange={props.registerHandleChange}
            loginFormData={props.loginFormData}
            registerFormData={props.registerFormData}
            currentUser={props.currentUser}
            handleRegister={props.handleRegister}
          />
        )}
      />

      <Route
        exact
        path="/poems/:poem_id"
        render={(props) => {
          const { poem_id } = props.match.params;
          return <PoemLarge poem_id={poem_id} history={props.history} currentUser={currentUser} />;
        }}
      />
    </div>
  );
}

export default PublicScreens;
