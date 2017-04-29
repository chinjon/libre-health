import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router} from 'react-router';
// import App from './App';

import Routes from './routes'

ReactDOM.render(
  <Router history={browserHistory} />,
  document.getElementById('root')
);
