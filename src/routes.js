import React from 'react';
import {Router, Route} from 'react-router';

import Landing from './Components/Landing/Landing';
import Dashboard from './Components/Dashboard/DashboardBody';

const Routes = (props) =>(
  <Router {...props}>
    <Route path="/" component={Landing} />
    <Route path="/Dashboard" component={Dashboard} />
    // <Route path="/IntakeForm" component={IntakeForm} />
  </Router>
)

export default Routes;
