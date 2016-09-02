import React from 'react';
import { Link, hashHistory } from 'react-router';

const sessionLinks = () => (
  <div className="login-signup">
  </div>
);

const logoutAndRedirect = logout => () => {
  logout();
  hashHistory.push('/');
}

const displayLogoutButton = (currentUser, logout) => (
  <div className="header-group">
    <button className="header-btn" onClick={logoutAndRedirect(logout)}>Log Out</button>
  </div>
);

const Welcome = ({ currentUser, logout }) => {
  if (currentUser) {
    return displayLogoutButton(currentUser, logout);
  } else {
    return sessionLinks();
  }
};

export default Welcome;
