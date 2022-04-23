import OpenProject from "./openProject/OpenProject";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./ProfilePage/Profile";
import ProjectDetails from "./projectDetails/ProjectDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="/ProjectDetails">
          <ProjectDetails />
        </Route>
        <Route path="/">
          <OpenProject />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
