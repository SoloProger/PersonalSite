import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../router";

export default function Routes() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const redirect = () => {
    window.location.href = "http://77.223.97.201/admin";
    return null;
  };
  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route exact path="/admin" render={() => (true ? redirect() : null)} />
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      {/* <Redirect to="/" /> */}
    </Switch>
  );
}
