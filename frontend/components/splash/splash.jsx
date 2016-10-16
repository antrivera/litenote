import React from 'react';
import { hashHistory } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.formType = null;

    this.guestDemoLogin = this.guestDemoLogin.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  guestDemoLogin() {
    let user = {
        username: "guest",
        password: "password"
    }

    this.props.login({user})
  }

  componentWillMount() {
    Modal.setAppElement('#root');
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      hashHistory.push("/login");
    }
  }

  openModal(formType) {
    return () => {
      this.formType = formType;
      this.setState({open: true});
    }
  }

  closeModal() {
    this.setState({open: false});
  }

  render() {
    return (
      <header>
        <nav className="navbar">
          <div className="splash-logo-dummy">
            <div className="reactnote-logo"></div>
          </div>

          <ul className="navbar-list-group">
            <li><div id="login-btn" onClick={ this.openModal('login') }>Login</div></li>
          </ul>
        </nav>

        <div id="splash-container">
          <Modal  className="modal" overlayClassName="modal-overlay"
            isOpen={ this.state.open } onRequestClose={ this.closeModal }>
            <SessionFormContainer formType={ this.formType } />
          </Modal>
          <div id="splash-content">
            <div id="splah-content-text">
              <h1 id="splash-title">Litenote</h1>
              <h2 id="splash-description">Write it down.</h2>
            </div>
            <div id="sign-up-btn-container">
              <button onClick={ this.openModal('signup') }>Sign Up!</button>
              <button onClick={this.guestDemoLogin}>Guest Demo</button>
            </div>
          </div>
        </div>
      </header>
    );
  }
};

export default Splash;
