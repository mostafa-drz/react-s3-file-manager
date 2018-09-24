import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isUserAuthenticated } from '../../actions/User';
import Loading from '../Loading';
import Error from '../Error';
import { Redirect } from 'react-router-dom';
const withOnlyGuests = (WrapperComponent) => {
  class OnlyGuests extends Component {
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
          {!checking && !authorized && <WrapperComponent />}
          {!checking && authorized && this.props.history.goBack()}
        </div>
      )
    }
  }
  return connect(null, { isUserAuthenticated })(OnlyGuests);
}

export default withOnlyGuests;