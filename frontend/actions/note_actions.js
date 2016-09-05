export const NoteConstants = {
  REQUEST_NOTES: "REQUEST_NOTES",
  CREATE_NOTE: "CREATE_NOTE",
  RECEIVE_NOTES: "RECEIVE_NOTES",
  RECEIVE_NOTE: "RECEIVE_NOTE",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
  CLEAR_NOTES_STATE: "CLEAR_NOTES_STATE",
}

export const fetchAllNotes = () => ({
  type: NoteConstants.REQUEST_NOTES
});

export const createNote = note => ({
  type: NoteConstants.CREATE_NOTE,
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

export const clearNotesState = () => ({
  type: NoteConstants.CLEAR_NOTES_STATE
});
