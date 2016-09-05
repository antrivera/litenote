import { NoteConstants } from '../actions/note_actions';
import { merge } from 'lodash';

const NoteReducer = (state= [], action) => {
  switch (action.type) {
    case NoteConstants.RECEIVE_NOTES:
      return action.notes;
    case NoteConstants.RECEIVE_NOTE:
      return [...state, action.note];
    case NoteConstants.CLEAR_NOTES_STATE:
      return [];
    case NoteConstants.RECEIVE_ERRORS:
      // TODO: error state structure
    default:
      return state;
  }
};

export default NoteReducer;
