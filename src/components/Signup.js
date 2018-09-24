import React, { Component } from 'react';
import { isEmail } from 'validator';
import { signUpUserOnCognito } from '../actions/User';
import { connect } from 'react-redux';
import Loading from './Loading';
import FieldError from './FieldError';
import Error from './Error';
class Signup extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    emailError: null,
    passwordError: null,
    confirmPasswordError: null,
    signUpError: null
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value, emailError: null });
  };
  handlePasswordChange = e => {
    this.setState({ password: e.target.value, passwordError: null });
  };
  handlePasswordConfirmChange = e => {
    this.setState({ confirmPassword: e.target.value, confirmPasswordError: null });
  };
  validateEmail = () => {
    const { email } = this.state;
    if (!isEmail(email)) {
      this.setState({ emailError: 'Please enter a valid email' });
      return false;
    }
    return true;
  };
  validatePassword = () => {
    const { password } = this.state;
    const validPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/;
    if (!validPassword.test(password)) {
      this.setState({ passwordError: 'The password should contain at least one lower case, one upper case and one number and also be at least 8 charchters' });
      return false;
    }
    return true;
  };
  validateConfirmPassword = () => {
    const { confirmPassword, password } = this.state;
    if (confirmPassword !== password) {
      this.setState({ confirmPasswordError: 'The apssword and confirm password are not equal' });
      return false;
    }
    return true;
  };
  signUpUser = e => {
    e.preventDefault();
    const { password, email, confirmPassword } = this.state;
    if (!this.validateEmail() || !this.validatePassword() || !this.validateConfirmPassword()) {
      return false;
    }
    if (password.length === 0 || email.length === 0 || confirmPassword.length === 0) {
      this.setState({ signUpError: 'All fields are required' });
      return false;
    }
    this.props.signUpUserOnCognito({ email, password });
  };
  render() {
    const { email, password, confirmPassword, emailError, passwordError, confirmPasswordError, signUpError } = this.state;
    const { signingUp, signingUpError, signingUpSuccess } = this.props;
    return (
      <div className="container">
        {signingUp && <Loading />}
        <h1>Sign Up</h1>
        {signingUpError && <Error message={signingUpError} />}
        {signingUpSuccess && <p style={{ border: "1px solid #004d40", color: "#004d40", padding: '2% 3%', backgroundColor: '#e0f2f1' }}>Signed up! We sent an email to you,Please confirm your email address:)</p>}
        {!this.props.signingUpSuccess && (<form className="col s12">
          <div className="row">
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
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="password"
                type="password"
                name="password"
                onBlur={this.validatePassword}
                onChange={this.handlePasswordChange}
                placeholder="Please Enter Your Password"
                value={password}
              />
              <label htmlFor="password" className="label">
                Passsword
              </label>
              {passwordError && <FieldError message={passwordError} />}
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                onBlur={this.validateConfirmPassword}
                onChange={this.handlePasswordConfirmChange}
                placeholder="Please Re-Enter Your Password"
                value={confirmPassword}
              />
              <label htmlFor="confirm-password" className="label">
                Confirm Password
              </label>
              {confirmPasswordError && <FieldError message={confirmPasswordError} />}
            </div>
          </div>
          <div className="row">
            <div className="col s3">
              {signUpError && <FieldError message={signUpError} />}
              <button type="button" className="waves-effect waves-light btn" style={{ textTransform: 'capitalize', width: '100px' }} onClick={this.signUpUser}>
                Sign Up
              </button>
            </div>
          </div>
        </form>)}
      </div>
    );
  }
}


const mapStateToProps = ({ Auth: { signingUp, signingUpError, signingUpSuccess } }) => ({ signingUp, signingUpSuccess, signingUpError });
export default connect(
  mapStateToProps,
  { signUpUserOnCognito }
)(Signup);
