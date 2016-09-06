import React from 'react';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  noteTitles() {
    return this.props.notes.map((note, idx) => (
      <li key={note.title + idx}>
        <div className="note-list-item">
          {note.title}
        </div>
      </li>
    ));
  }

  render() {
    return (
      <div className="side-menu-container">
        { this.noteTitles() }
      </div>
    );
  }
};

export default NoteIndex;
