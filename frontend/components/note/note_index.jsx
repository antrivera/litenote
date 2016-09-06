import React from 'react';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  noteTitles() {
    return this.props.notes.map((note, idx) => (
      <li key={note.title + idx}>
        <div className="notebook-list-item">
          {note.title}
        </div>
      </li>
    ));
  }

  render() {
    return (
      <div className="side-menu-container">
        <div className="header-container">
          <h2>{`${this.props.notebookTitle}`}</h2>
        </div>
        <ul>
          { this.noteTitles() }
        </ul>
      </div>
    );
  }
};

export default NoteIndex;
