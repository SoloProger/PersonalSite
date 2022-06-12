import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../router";

export default function Routes() {
  const { isAuth,  } = useContext(AuthContext);

  return isAuth ? (
    <main>
      <Switch>
        {privateRoutes.map((route) => (
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        ))}
      </Switch>
    </main>
  ) : (
    <main>
      <Switch>
        {publicRoutes.map((route) => (
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        ))}

        <Redirect to="/" />
      </Switch>
    </main>
  );
}
