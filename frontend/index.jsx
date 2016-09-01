import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {login, logout, signup} from './actions/session_actions';
const Root = () => (
  <div>It works</div>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  let store = window.Store = configureStore();
  ReactDOM.render(<Root />, root);
});
