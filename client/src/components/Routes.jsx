import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from '../router';

export default function Routes() {
	const { isAuth } = useContext(AuthContext);

	return isAuth ? (
		<div>
			<h2></h2>
			<Switch>
				{privateRoutes.map(route => (
					<Route
						component={route.component}
						path={route.path}
						exact={route.exact}
						key={route.path}
					/>
				))}
			</Switch>
		</div>
	) : (
		<div>
			<Switch>
				{publicRoutes.map(route => (
					<Route
						component={route.component}
						path={route.path}
						exact={route.exact}
						key={route.path}
					/>
				))}

				<Redirect to='/' />
			</Switch>
		</div>
	);
}
