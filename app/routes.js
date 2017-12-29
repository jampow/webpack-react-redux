import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Users from './containers/Users';

export default (
	<Switch>
		<Route exact path="/" component={Users} />
	</Switch>
);
