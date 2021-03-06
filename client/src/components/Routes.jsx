import React from "react";
import { Route } from "react-router-dom";

import Welcome from "./Welcome";
import Write from "./screens/Write";
import Feed from "./screens/Feed";
import Notebook from "./screens/Notebook";
import Search from "./screens/Search";
import PoemLarge from "./widgets/PoemLarge";
import FeedByAuthor from './screens/FeedByAuthor'

function UserScreens(props) {
  const { currentUser } = props;
  return (
    <div className="user-screens">
      <Route
        exact
        path="/"
        render={() => (
          <Feed
            currentUser={props.currentUser}
            history={props.history}
            submitted={props.submitted}
            deleted={props.deleted}
            updateSubmittedState={props.updateSubmittedState}
            updateDeletedState={props.updateDeletedState}
          />
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
          <Write
            currentUser={props.currentUser}
            history={props.history}
            updateSubmittedState={props.updateSubmittedState}
          />
        )}
      />
      <Route
        exact
        path="/update-poem/:id"
        render={() => (
          <Write
            currentUser={props.currentUser}
            history={props.history}
            updateSubmittedState={props.updateSubmittedState}
            updateEditClicked={props.updateEditClicked}
            editClicked={props.editClicked}
          />
        )}
      />
      <Route
        exact
        path="/search"
        render={() => (
          <Search currentUser={props.currentUser} history={props.history} />
        )}
      />

      <Route
        exact
        path="/poems/:poem_id"
        render={(props) => {
          const { poem_id } = props.match.params;
          return (
            <PoemLarge
              poem_id={poem_id}
              history={props.history}
              currentUser={currentUser}
            />
          );
        }}
      />

      <Route
        exact
        path="/authors/:user_id"
        render={(props) => {
          const { user_id } = props.match.params;
          return (
            <FeedByAuthor
              author={user_id}
              history={props.history}
              currentUser={currentUser}
            />
          );
        }}
      />
    </div>
  );
}

export default UserScreens;
