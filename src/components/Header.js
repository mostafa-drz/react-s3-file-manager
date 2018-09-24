import React from 'react';
import UserHeader from './UserHeader';
import GuestHeader from './GuestHeader';
import { connect } from 'react-redux';
const Header = ({ isAuthorized }) => (
  isAuthorized ? <UserHeader /> : <GuestHeader />
);

const mapStateToProps = ({ Auth: { isAuthorized } }) => ({ isAuthorized });
export default connect(mapStateToProps)(Header);
