import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';
import SessionFormContainer from '../session/session_form_container';
import HomeContainer from '../home/home_container';
import NavbarContainer from '../navbar/navbar_container';
import NewNotebookContainer from '../notebook/new_notebook_container';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);

    this.ensureLoggedIn = this.ensureLoggedIn.bind(this);
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);

    this.routes = (
      <Route path="/" component={ App }>
        <IndexRoute component={ NavbarContainer } />
        <Route path="/login" onEnter={ this.redirectIfLoggedIn } component={ SessionFormContainer } />
        <Route path="/signup" onEnter={ this.redirectIfLoggedIn } component={ SessionFormContainer } />
        <Route path="/home" onEnter={ this.ensureLoggedIn } component={ HomeContainer } />
        <Route path="/new-notebook" onEnter={ this.ensureLoggedIn } component={ NewNotebookContainer } />
      </Route>
    );
  }

  ensureLoggedIn(nextState, replace) {
    const currentUser = this.props.currentUser;
    if (!currentUser) {
      replace('/');
    }
  }

  redirectIfLoggedIn(nextState, replace) {
    const currentUser = this.props.currentUser;
    if (currentUser) {
      replace('/home');
    }
  }

  render() {
    return (
      <Router history={ hashHistory }>
        {this.routes}
      </Router>
    );
  }
}

export default AppRouter;
