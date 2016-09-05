import React from 'react';
import { Link, hashHistory } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.guestDemoLogin = this.guestDemoLogin.bind(this);
  }

  guestDemoLogin() {
    let user = {
        username: "guest",
        password: "password"
    }

    this.props.login({user})
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      hashHistory.push("/login");
    }
  }

  render() {
    return (
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
              <button onClick={this.guestDemoLogin}>Guest Demo</button>
            </div>
          </div>
        </div>
      </header>
    );
  }
};

export default Splash;
