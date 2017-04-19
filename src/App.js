import React, { Component } from 'react';
import Navigation from './Components/Navigation';
import Landing from './Components/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Landing />
      </div>
    );
  }
}

export default App;
