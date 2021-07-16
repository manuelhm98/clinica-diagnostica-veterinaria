import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Breeds from "../pages/Breeds";
import Colors from "../pages/Colors";
import Customers from "../pages/Customers";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Patiences from "../pages/Patiences";
import PatType from "../pages/PatType";
import Sexes from "../pages/Sexes";
import Species from "../pages/Species";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/breeds" exact component={Breeds} />
        <Route path="/species" exact component={Species} />
        <Route path="/colors" exact component={Colors} />
        <Route path="/sexes" exact component={Sexes} />
        <Route path="/pat-type" exact component={PatType} />
        <Route path="/customers" exact component={Customers} />
        <Route path="/patiences" exact component={Patiences} />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
}
