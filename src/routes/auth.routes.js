import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "../pages/Auth";

export default function AuthRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Auth} />
      </Switch>
    </Router>
  );
}
