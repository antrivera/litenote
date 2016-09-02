import React from 'react';
import { Link } from 'react-router';

const Navbar = ({login}) => (
  <header>
    <nav className="navbar">
      <h3>
        <Link to="/">Litenote</Link>
      </h3>

      <ul className="navbar-list-group">
        <li><Link to="/login" activeClassName="current">Login</Link></li>
      </ul>
    </nav>

    <div>
      <Link to="/signup" activeClassName="current"><button>Sign Up!</button></Link>
    </div>
  </header>
);

export default Navbar;
