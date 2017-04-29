import React from 'react';
import {Router, Route} from 'react-router';

import Landing from './Components/Landing/Landing';
import Dashboard from './Components/Dashboard/DashboardBody';
import Auth from './modules/Auth';

function requireAuth(nextState, replace) {
  if (Auth.isUserAuthenticated()) {
    replace({
      pathname: '/login'
    })
  }
}
const Routes = (props) =>(
  <Router {...props}>
    <Route path="/" component={Landing} />
    <Route path="/Dashboard" component={Dashboard} onEnter={requireAuth}/>
  </Router>
)

export default Routes;
