import React, {Component} from 'react';
import {Route, Router} from 'react-router';

import Landing from './../Landing/Landing';

class Public extends Component {
	constructor(props){
		super(props);
		this.noAuth.bind(this);
	}
	noAuth (nextState, replace) {
	    if (this.props.isAuth == true) {
	        // Redirect to Dashboard if authenticated user
	        replace({ pathname: '/User' })
	    }
	}
	render() {
	  	return (
	  		<Router>
	     		<Route path="/Login" component={Landing} onEnter={this.noAuth} newUser={this.props.newUser} login={this.props.login}/>
	     	</Router>
	  	)
	}
}

export default Public;