import React from "react";
import {Route, Switch } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import StartPage from "../pages/StartPage";

export default function Routes() {
  return (
    <Switch>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/">
        <StartPage />
      </Route>
    </Switch>
  );
}
