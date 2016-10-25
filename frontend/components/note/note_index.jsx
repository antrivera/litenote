import React from 'react';
import NoteIndexItem from './note_index_item';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);

    this.createNewNote = this.createNewNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.searchNotes = this.searchNotes.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllNotes();
  }

  notesList() {
    return this.props.notes.map((note, idx) => (
      <NoteIndexItem
        note={note}
        idx={idx}
        key={note.title + idx}
        deleteNote={ this.deleteNote }
        displayNoteContent={ this.props.fetchNoteContent } />
    ));
  }

  createNewNote() {
    this.props.emptyContentState();
    this.props.displayNoteContent(null);
  }

  deleteNote(note, event) {
    event.stopPropagation();
    this.props.deleteNote(note);
  }

  searchNotes(e) {
      this.props.filterNotes(e.currentTarget.value);
  }

  render() {
    return (
      <div className="side-menu-container">
        <div className="header">
          <div className="header-container">
            <h2>{`${this.props.notebook.title.toUpperCase()}`}</h2>
            <div className="new-icon" onClick={ this.createNewNote }></div>
          </div>
          <div className="search-input-container">
            <input
              type="text"
              className="search-input"
              placeholder="Find a note"
              onChange={ this.searchNotes }>
            </input>
          </div>
        </div>
        <ul>
          { this.notesList() }
        </ul>
      </div>
    );
  }
};

export default NoteIndex;
