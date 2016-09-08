import React from 'react';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);

    this.displayNote = this.displayNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  displayNote(note) {
    this.props.fetchNoteContent(note);
  }

  deleteNote(note, event) {
    event.stopPropagation();
    this.props.deleteNote(note);
  }

  noteTitles() {
    return this.props.notes.map((note, idx) => (
      <li key={note.title + idx}>
        <div className="note-list-item" onClick={ this.displayNote.bind(null, note)}>
          <div className="note-index-item-title">
            {note.title}
          </div>
          <div className="note-item-btns">
            <button className="delete-btn sidebar-btn" onClick={ this.deleteNote.bind(null, note)}></button>
          </div>
        </div>
      </li>
    ));
  }

  render() {
    return (
      <div className="side-menu-container">
        <div className="header-container">
          <h2>{`${this.props.notebook.title}`}</h2>
        </div>
        <ul>
          { this.noteTitles() }
        </ul>
      </div>
    );
  }
};

export default NoteIndex;
