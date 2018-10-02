import React, { Component, Fragment } from 'react';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import withAuthorization from './components/Helpers/withAuthorization';
import withOnlyGuests from './components/Helpers/withOnlyGuests';
class App extends Component {
  render() {
    return (
      <div className="container" style={{ backgroundColor: '#b3e5fc', width: '100%', height: '100%', minWidth: '100vw', minHeight: '100vh', margin: '0' }}>
        <BrowserRouter>
          <Fragment>
            <Header />
            <Switch>
              <Route path="/signup" component={withOnlyGuests(Signup)} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/dashboard" component={withAuthorization(Dashboard)} />
            </Switch>
          </Fragment>
        </BrowserRouter>


      </div>
    );
  }
}

export default App;
