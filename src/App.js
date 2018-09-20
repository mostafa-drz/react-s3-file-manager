import React, { Component } from 'react';
import Signup from './components/Signup';
import Header from './components/Header';
class App extends Component {
  render() {
    return (
      <div className="container" style={{ backgroundColor: '#e3f2fd', width: '100%', height: '100%', minWidth: '100vw', minHeight: '100vh', margin: '0' }}>
        <Header />
        <Signup />
      </div>
    );
  }
}

export default App;
