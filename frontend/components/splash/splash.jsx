import React from 'react';
import { Link } from 'react-router';

const Splash = ({login}) => (
  <header>
    <nav className="navbar">
      <div className="splash-logo-dummy">
        <div className="reactnote-logo"></div>
      </div>

      <ul className="navbar-list-group">
        <li><Link to="/login" activeClassName="current">Login</Link></li>
      </ul>
    </nav>

    <div id="splash-container">
      <div id="splash-content">
        <div id="splah-content-text">
          <h1 id="splash-title">Reactnote</h1>
          <h2 id="splash-description">Write it down.</h2>
        </div>
        <div id="sign-up-btn-container">
          <Link to="/signup" activeClassName="current"><button>Sign Up!</button></Link>
        </div>
      </div>
    </div>
  </header>
);

export default Splash;
