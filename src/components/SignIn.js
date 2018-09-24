import React, { Component } from 'react';
import FieldError from './FieldError';
import { isEmail } from 'validator';
import { signInUserOnCognito } from '../actions/User';
import { connect } from 'react-redux';
import Loading from './Loading';
import Error from './Error';
import { Redirect } from 'react-router-dom';
class SignIn extends Component {

  state = {
    email: '',
    password: '',
    emailError: null,
  }
  handleEmailChange = e => {
    this.setState({ email: e.target.value, emailError: null });
  };
  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };
  validateEmail = () => {
    const { email } = this.state;
    if (!isEmail(email)) {
      this.setState({ emailError: 'Please enter a valid email' });
      return false;
    }
    return true;
  };
  signInUser = (e) => {
    e.preventDefault();
    const { password, email } = this.state;
    if (!this.validateEmail()) {
      return false;
    }
    if (password.length === 0 || email.length === 0) {
      this.setState({ signUpError: 'All fields are required' });
      return false;
    }
    this.props.signInUserOnCognito({ email, password });
  }
  render() {
    const { email, password, emailError } = this.state;
    const { signingIn, signingInError, signingInSuccess } = this.props;
    return <div className="container center" style={{ maxWidth: '400px' }}>
      <h1>Sign In</h1>
      {signingInError && <Error message={signingInError} />}
      {signingInSuccess && <Redirect to="/dashboard" />}
      {signingIn ? <Loading /> : (
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="input-field col s6">
            <input
              id="email"
              type="email"
              name="email"
              onBlur={this.validateEmail}
              onChange={this.handleEmailChange}
              placeholder="Please Enter Your Email Address..."
              value={email}
            />
            <label htmlFor="email" className="label">
              Email
              </label>
            {emailError && <FieldError message={emailError} />}
          </div>
          <div className="input-field col s6">
            <input
              id="password"
              type="password"
              name="password"
              onChange={this.handlePasswordChange}
              placeholder="Please Enter Your Password"
              value={password}
            />
            <label htmlFor="password" className="label">
              Passsword
              </label>
          </div>
          <button className="btn" style={{ textTransform: 'capitalize' }} onClick={this.signInUser}>Sign In</button>
        </form>)}
    </div >
  }
}
const mapStateToProps = ({ Auth: { signingIn, signingInSuccess, signingInError } }) => ({ signingIn, signingInSuccess, signingInError });
export default connect(mapStateToProps, { signInUserOnCognito })(SignIn);