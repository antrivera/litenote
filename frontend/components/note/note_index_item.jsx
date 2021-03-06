import React from 'react';
import { prettyPrintTime } from '../../util/pretty_print_time';

const NoteIndexItem = ({note, idx, displayNoteContent, deleteNote}) => (
  <li>
    <div className="note-list-item" draggable="true" onClick={ displayNoteContent.bind(null, note) }>
      <div className="note-index-item-title">
        {note.title}
      </div>
      <div className="note-index-item-last-updated">
        {prettyPrintTime(note.updated_at)}
      </div>
      <div className="note-index-item-body">
        {note.plain_text_body}
      </div>
      <div className="note-item-btns">
        <button className="delete-btn sidebar-btn" onClick={ deleteNote.bind(null, note) }></button>
      </div>
    </div>
  </li>
);

export default NoteIndexItem;
