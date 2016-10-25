import { NoteConstants } from '../actions/note_actions';
import { merge, union } from 'lodash';

const initialState = {
  searchTerm: '',
  notes: []
}

const NoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case NoteConstants.RECEIVE_NOTES:
      let newState = merge({}, {searchTerm: state.searchTerm}, {notes: action.notes});
      return newState;
    case NoteConstants.RECEIVE_NOTE:
      debugger
      return merge({}, state, {notes: [action.note, ...state.notes]});
    case NoteConstants.CLEAR_NOTES_STATE:
      return initialState;
    case NoteConstants.RECEIVE_UPDATE:
      debugger
      const oldState = state.notes.filter(note => note.id !== action.note.id);
      return merge({}, state, {notes: [action.note, ...oldState]});
    case NoteConstants.FILTER_NOTES:
      return merge({}, state, {searchTerm: action.term});
    case NoteConstants.RECEIVE_ERRORS:
      // TODO: error state structure
    default:
      return state;
  }
};

export default NoteReducer;
