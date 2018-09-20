import React from 'react';

const Header = () => (
  <nav style={{ backgroundColor: '#1a237e', paddingRight: '1%', paddingLeft: '1%' }}>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">
        Test
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="sass.html">Login</a>
        </li>
        <li>
          <a href="badges.html">Components</a>
        </li>
        <li>
          <a href="collapsible.html">JavaScript</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
