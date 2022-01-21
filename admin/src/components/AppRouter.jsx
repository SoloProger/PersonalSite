import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { routes } from "../routes";

const AppRouter = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRouter;