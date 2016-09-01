import React from 'react';
import WelcomeContainer from './welcome/welcome_container';
import { Link, hashHistory } from 'react-router';

const App = ({children}) => (
  <div>
    <header>
      <nav className="navbar">
        <h3>
          <Link to="/">Litenote</Link>
        </h3>

        <ul className="navbar-list-group">
          <li><Link to="/login" activeClassName="current">Login</Link></li>
        </ul>

      </nav>
      <h1> Litenote </h1>
      <WelcomeContainer />
    </header>
    {children}
  </div>
);

export default App;
