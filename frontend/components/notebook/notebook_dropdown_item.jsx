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
);

const currentlyActiveNotebook = (notebook, activeNote) => (
  (activeNote && notebook.id === activeNote.notebook_id) ? 'active-notebook' : ''
);

const NotebookDropdownItem = ({notebook, updateNote, activeNote, moveNote}) => (
  <li className={`notebook-dropdown-item ${currentlyActiveNotebook(notebook, activeNote)}`}
    onClick={ updateNoteParentNotebook(activeNote, moveNote, notebook) }>{notebook.title}
  </li>
);

export default NotebookDropdownItem;
