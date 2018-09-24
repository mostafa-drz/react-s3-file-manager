import React, { Component, Fragment } from 'react';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="container" style={{ backgroundColor: '#e3f2fd', width: '100%', height: '100%', minWidth: '100vw', minHeight: '100vh', margin: '0' }}>
        <BrowserRouter>
          <Fragment>
            <Header />
            <Switch>
              <Route path="/signup" component={Signup} />
              <Route path="/sign-in" component={SignIn} />
            </Switch>
          </Fragment>
        </BrowserRouter>


      </div>
    );
  }
}

export default App;
