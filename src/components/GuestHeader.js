import React from 'react';
import { Link } from 'react-router-dom';
const GuestHeader = () => (
  <nav style={{ backgroundColor: '#1a237e', paddingRight: '1%', paddingLeft: '1%' }}>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">
        Test
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to="/sign-in">Sign In</Link>
        </li>
        <li >
          <Link to="/signup" className="btn">Sign Up!</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default GuestHeader;