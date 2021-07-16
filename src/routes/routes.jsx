import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Breeds from "../pages/Breeds";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Species from "../pages/Species";
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/breeds" exact component={Breeds} />
        <Route path="/species" exact component={Species} />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
}
