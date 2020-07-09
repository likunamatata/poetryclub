import React from "react";
import { Route } from "react-router-dom";

import Welcome from "./Welcome";
import Write from "./poems/Write";
import Feed from "./poems/Feed";
import Notebook from "./poems/Notebook";
import Search from "./poems/Search";
import PoemLarge from "./poems/PoemLarge";

function UserScreens(props) {

  return (
    <div className="user-screens">
      <Route
        exact
        path="/"
        render={() => (
          <Feed currentUser={props.currentUser} history={props.history} />
        )}
      />

      <Route
        exact
        path="/notebook"
        render={() => (
          <Notebook currentUser={props.currentUser} history={props.history} />
        )}
      />

      <Route exact path="/welcome" render={() => <Welcome />} />
      <Route
        exact
        path="/write"
        render={() => (
          <Write currentUser={props.currentUser} history={props.history} />
        )}
      />
         <Route
        exact
        path="/search"
        render={() => (
          <Search currentUser={props.currentUser} history={props.history}/>
        )}
      />

<Route
        exact
        path="/poems/:poem_id"
        render={(props) => {
          const { poem_id } = props.match.params;
          return <PoemLarge poem_id={poem_id} history={props.history} />
        }}
      />

    </div>
  );
}

export default UserScreens;
