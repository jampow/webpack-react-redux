import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Users from './containers/users';
import Login from './containers/login';

export default (
	<Switch>
		<Route exact path="/" component={Users} />
		<Route exact path="/login" component={Login} />
	</Switch>
);
