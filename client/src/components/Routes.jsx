import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import StartPage from "../pages/StartPage";

export default function Routes(isAuth) {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <StartPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}
