import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isUserAuthenticated } from '../../actions/User';
import Loading from '../Loading';
import Error from '../Error';
import { Redirect } from 'react-router-dom';
const withAuthorization = (WrapperComponent) => {
  class AuthorizationHOC extends Component {
    state = {
      checking: true,
      authorized: false,
      error: null
    }
    componentDidMount() {
      this.props.isUserAuthenticated().then(() => {
        this.setState({ authorized: true });
      }).catch((error) => {
        this.setState({ error, authorized: false });
      }).finally(() => {
        this.setState({ checking: false });
      })
    }
    render() {
      const { error, checking, authorized } = this.state;
      return (
        <div>
          {checking && <Loading />}
          {error && <Error message={error} />}
          {!checking && authorized && <WrapperComponent />}
          {!checking && !authorized && <Redirect to="/sign-in" />}
        </div>
      )
    }
  }
  return connect(null, { isUserAuthenticated })(AuthorizationHOC);
}

export default withAuthorization;