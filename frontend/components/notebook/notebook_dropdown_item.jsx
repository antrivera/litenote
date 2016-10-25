import React from 'react';

const updateNoteParentNotebook = (note, moveNote, notebook) => (
  () => {
    if (!note) {
      moveNote(null, notebook);
      return;
    }

    note = {
      id: note.id,
      details: {
        title: note.title,
        body: note.body,
        notebook_id: notebook.id
      }
    };
    moveNote({note}, notebook);
  }
)

const NotebookDropdownItem = ({notebook, updateNote, activeNote, moveNote}) => (
  <li className="notebook-dropdown-item" onClick={ updateNoteParentNotebook(activeNote, moveNote, notebook) }>{notebook.title}</li>
);

export default NotebookDropdownItem;
