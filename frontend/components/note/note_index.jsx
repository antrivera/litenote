import React from 'react';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);

    this.displayNote = this.displayNote.bind(this);
  }

  displayNote(note) {
    this.props.fetchNoteContent(note);
  }

  noteTitles() {
    return this.props.notes.map((note, idx) => (
      <li key={note.title + idx}>
        <div className="note-list-item" onClick={ this.displayNote.bind(null, note)}>
          {note.title}
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
