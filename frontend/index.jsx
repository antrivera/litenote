import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as NoteActions from './actions/note_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  var store;

  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser, errors: []}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.fetchAllNotes = NoteActions.fetchAllNotes;
  window.Store = store;
  ReactDOM.render(<Root store={store} />, root);
});
