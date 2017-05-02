import React, {Component} from 'react';
import {Route, Router} from 'react-router';

import Dashboard from './../Dashboard/DashboardBody';

class Private extends Component {
	constructor(props) {
		super(props);
		this.requireAuth.bind(this);
	}

	requireAuth(nextState, replace) {
	    if (this.props.isAuth == false) {
	        // Redirect to Landing Page if not authenticated
	        replace({ pathname: '/' });
	    }
	}
	render() {
	  	return (
	  		<Router>
	     	 <Route path="/Dashboard" component={Dashboard} onEnter={this.requireAuth} user={this.props.user}/>
	     	</Router>
	  	)
	}
}

export default Private;