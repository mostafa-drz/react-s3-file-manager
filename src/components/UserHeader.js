import React, { PureComponent } from 'react';
import { logoutUser } from '../actions/User';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
class UserHeader extends PureComponent {
  logout = (e) => {
    e.preventDefault();
    this.props.logoutUser().then(() => {
      this.props.history.push('/');
    })
  }
  render() {
    return (
      <nav style={{ backgroundColor: '#1a237e', paddingRight: '1%', paddingLeft: '1%' }}>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Test
        </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a onClick={this.logout}>Log out</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default withRouter(connect(null, { logoutUser })(UserHeader));