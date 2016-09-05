import React from 'react';
import NotebookIndex from '../notebook/notebook_index';
import NoteIndex from '../note/note_index';
import { Link, hashHistory } from 'react-router';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNotes: true,
      displayNotebooks: false
    };

    this.logoutAndRedirect = this.logoutAndRedirect.bind(this);
    this.fetchAllNotebooks = this.fetchAllNotebooks.bind(this);
    this.fetchAllNotes = this.fetchAllNotes.bind(this);
  }

  fetchAllNotebooks() {
    this.props.fetchAllNotebooks();
    this.setState({
      displayNotes: false,
      displayNotebooks: true
    });
  }

  fetchAllNotes() {
    this.props.fetchAllNotes();
    this.setState({
      displayNotes: true,
      displayNotebooks: false
    });
  }

  logoutAndRedirect(logout) {
    this.props.logout();
    hashHistory.push('/');
  }

  render() {
    return (
      <div>
        <div className="sidebar">
          <div className="logo-dummy">
            <div className="reactnote-logo"></div>
          </div>

          <div className="sidebar-btn-group">
            <button className="sidebar-btn" id="note-btn" onClick={this.fetchAllNotes}></button>
            <button className="sidebar-btn" id="notebook-btn" onClick={this.fetchAllNotebooks}></button>
          </div>
          <div id="logout-btn-dummy">
            <button className="sidebar-btn" id="logout-btn" onClick={this.logoutAndRedirect}></button>
          </div>
        </div>

        <div className="side-menu-container">
          {this.state.displayNotes ? <NoteIndex /> :
            <NotebookIndex notebooks={this.props.notebooks} /> }
        </div>
      </div>
    );
  }
}

export default Sidebar;
