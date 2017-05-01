import React from 'react';
import {Router, Route} from 'react-router';

import App from './App';
import Landing from './Components/Landing/Landing';
import Dashboard from './Components/Dashboard/DashboardBody';



const Routes = (props) =>(
  <Router {...props}>
  	<Route component={App}>
	    <Route path="/" component={Landing} />
	    <Route path="/Dashboard" component={Dashboard} />
		{/*<Route path="/IntakeForm" component={IntakeForm} /> */}
	</Route>
  </Router>
)

export default Routes;
