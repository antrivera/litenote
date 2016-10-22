import React from 'react';
import NotebookIndex from '../notebook/notebook_index';
import NotebookContainer from '../notebook/notebook_container';
import NoteIndex from '../note/note_index';
import TagIndex from '../tag/tag_index';
import { Link, hashHistory } from 'react-router';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.logoutAndRedirect = this.logoutAndRedirect.bind(this);
    this.openNotebookDrawer = this.openNotebookDrawer.bind(this);
    this.openTagDrawer = this.openTagDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.displayNotes = this.displayNotes.bind(this);
    this.fetchNoteContent = this.fetchNoteContent.bind(this);
  }

  openNotebookDrawer() {
    this.props.displayAllNotebooks();
  }

  closeDrawer() {
    this.props.closeDrawer();
  }

  openTagDrawer() {
    this.props.displayAllTags();
  }

  displayNotes() {
    this.props.fetchAllNotes();
    this.props.displayAllNotes();
  }

  logoutAndRedirect(logout) {
    this.props.logout();
    this.props.emptyContentState();
    hashHistory.push('/');
  }

  fetchNoteContent(note) {
    this.props.fetchNote(note);
    this.props.displayNoteContent(note);
  }

  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar">
          <div className="logo-dummy">
            <div className="reactnote-logo"></div>
          </div>

          <div className="sidebar-btn-group">
            <button className="sidebar-btn" id="note-btn" onClick={this.displayNotes}></button>
            <button className="sidebar-btn" id="notebook-btn" onClick={this.openNotebookDrawer}></button>
            <button className="sidebar-btn" id="tag-btn" onClick={this.openTagDrawer}></button>
          </div>

          <div id="logout-btn-dummy">
            <button className="sidebar-btn" id="logout-btn" onClick={this.logoutAndRedirect}></button>
          </div>
        </div>

        <NoteIndex notes={this.props.notes}
          notebook={this.props.activeState.currentNotebook}
          fetchNoteContent={this.fetchNoteContent}
          fetchAllNotes={ this.props.fetchAllNotes }
          filterSearchResults={ this.filterSearchResults }
          emptyContentState={ this.props.emptyContentState }
          displayNoteContent={this.props.displayNoteContent}
          deleteNote={this.props.deleteNote} />

        <NotebookContainer
          className={`notebook-index-container ${this.props.activeState.notebooks}`}
          notebooks={this.props.notebooks}
          closeDrawer={ this.closeDrawer } />

        <TagIndex
          className={`tag-index-container ${this.props.activeState.tags}`}
          tags={this.props.tags}
          closeDrawer={ this.closeDrawer }
          fetchAllTags={ this.props.fetchAllTags }
          fetchTaggedNotes={this.fetchTaggedNotes} />
      </div>
    );
  }
}

export default Sidebar;
