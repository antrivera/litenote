export const NoteConstants = {
  REQUEST_NOTES: "REQUEST_NOTES",
  REQUEST_NOTE: "REQUEST_NOTE",
  CREATE_NOTE: "CREATE_NOTE",
  UPDATE_NOTE: "UPDATE_NOTE",
  RECEIVE_UPDATE: "RECEIVE_UPDATE",
  RECEIVE_NOTES: "RECEIVE_NOTES",
  RECEIVE_NOTE: "RECEIVE_NOTE",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
  DESTROY_NOTE: "DESTROY_NOTE",
  CLEAR_NOTES_STATE: "CLEAR_NOTES_STATE",
};

export const fetchAllNotes = () => ({
  type: NoteConstants.REQUEST_NOTES
});

export const fetchNote = note => ({
  type: NoteConstants.REQUEST_NOTE,
  note
});

export const createNote = note => ({
  type: NoteConstants.CREATE_NOTE,
  note
});

export const updateNote = note => ({
  type: NoteConstants.UPDATE_NOTE,
  note
});

export const receiveUpdatedNote = note => ({
  type: NoteConstants.RECEIVE_UPDATE,
  note
});

export const receiveAllNotes = notes => ({
  type: NoteConstants.RECEIVE_NOTES,
  notes
});

export const receiveNote = note => ({
  type: NoteConstants.RECEIVE_NOTE,
  note
})

export const receiveErrors = errors => ({
  type: NoteConstants.RECEIVE_ERRORS,
  errors
});

export const deleteNote = note => ({
  type: NoteConstants.DESTROY_NOTE,
  note
});

export const clearNotesState = () => ({
  type: NoteConstants.CLEAR_NOTES_STATE
});
