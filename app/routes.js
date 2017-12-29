import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Users from './containers/users/Users';

export default (
	<Switch>
		<Route exact path="/" component={Users} />
	</Switch>
);
