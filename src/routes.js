import React from 'react';
import {Router, Route, Redirect} from 'react-router';

import App, {userLoggedIn} from './App';
import Landing from './Components/Landing/Landing';
import Dashboard from './Components/Dashboard/DashboardBody';


/*app is the parent of the entire app. It will handle user authentication 
for react router. We will have to use some lifecycle functions in landing 
and dashboard to prevent unauthorized access*/

const Routes = (props) =>(
  <Router {...props}>
  	<Route component={App}>
	    <Route path="/" component={Landing}/> 
	    <Route path="/Dashboard" component={Dashboard} />
		{/*<Route path="/IntakeForm" component={IntakeForm} /> */}
	</Route>
  </Router>
)

export default Routes;
