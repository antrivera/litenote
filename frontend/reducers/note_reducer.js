import { NoteConstants } from '../actions/note_actions';
import { merge, union } from 'lodash';

const NoteReducer = (state= [], action) => {
  switch (action.type) {
    case NoteConstants.RECEIVE_NOTES:
      return action.notes;
    case NoteConstants.RECEIVE_NOTE:
      return [...state, action.note];
    case NoteConstants.CLEAR_NOTES_STATE:
      return [];
    case NoteConstants.RECEIVE_UPDATE:
      const oldState = state.filter(note => note.id !== action.note.id);
      return [action.note, ...oldState];
    case NoteConstants.FILTER_NOTES:
      const filteredNotes = action.notes.filter(
        note => note.title.toLowerCase().includes(action.term.toLowerCase())
      )
      return filteredNotes;
    case NoteConstants.RECEIVE_ERRORS:
      // TODO: error state structure
    default:
      return state;
  }
};

export default NoteReducer;
