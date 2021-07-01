import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/";
import PostDetail from "./pages/PostDetail";
import { AppRouteType } from "./types";

const RootNavigator = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={AppRouteType.home} component={Home} />
        <Route path={AppRouteType.postDetailsWithId} component={PostDetail} />
      </Switch>
    </Router>
  );
};

export default RootNavigator;
