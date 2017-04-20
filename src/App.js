import React, { Component } from 'react';
import Navigation from './Components/Navigation';
import Landing from './Components/Landing';

import MedsListBody from './Components/MedsListBody';
import DashboardBody from './Components/DashboardBody';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Landing />
      </div>
    );
  }
}

export default App;
