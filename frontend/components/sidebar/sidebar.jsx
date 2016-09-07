import React from 'react';
import NotebookIndex from '../notebook/notebook_index';
import NoteIndex from '../note/note_index';
import { Link, hashHistory } from 'react-router';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.logoutAndRedirect = this.logoutAndRedirect.bind(this);
    this.fetchAllNotebooks = this.fetchAllNotebooks.bind(this);
    this.fetchAllNotes = this.fetchAllNotes.bind(this);
    this.fetchNotebookContents = this.fetchNotebookContents.bind(this);
    this.fetchNoteContent = this.fetchNoteContent.bind(this);
  }

  componentDidMount() {
    this.fetchAllNotes();
  }

  fetchAllNotebooks() {
    this.props.fetchAllNotebooks();
    this.props.displayAllNotebooks();
  }

  fetchAllNotes() {
    this.props.fetchAllNotes();
    this.props.displayAllNotes();
  }

  fetchNoteContent(note) {
    this.props.fetchNote(note);
    this.props.displayNoteContent(note);
  }

  fetchNotebookContents(notebook) {
    this.props.fetchNotebook(notebook);
    this.props.displayNotebookContent(notebook);
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
            <button className="sidebar-btn" id="new-note-btn"></button>
            <button className="sidebar-btn" id="note-btn" onClick={this.fetchAllNotes}></button>
            <button className="sidebar-btn" id="notebook-btn" onClick={this.fetchAllNotebooks}></button>
          </div>
          <div id="logout-btn-dummy">
            <button className="sidebar-btn" id="logout-btn" onClick={this.logoutAndRedirect}></button>
          </div>
        </div>

        {this.props.activeState.notes ?
          <NoteIndex notes={this.props.notes}
            notebook={this.props.activeState.currentNotebook}
            fetchNoteContent={this.fetchNoteContent} /> :
          <NotebookIndex
            notebooks={this.props.notebooks}
            fetchNotebookContents={this.fetchNotebookContents} /> }
      </div>
    );
  }
}

export default Sidebar;
