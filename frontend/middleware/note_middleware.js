import { NoteConstants, receiveAllNotes, receiveNote, receiveErrors } from '../actions/note_actions';
import { setContentState } from '../actions/editor_actions';
import * as NoteAPI from '../util/note_api_util';

const NoteMiddleware = ({getState, dispatch}) => next => action => {
  const success = notes => dispatch(receiveAllNotes(notes));
  const error = data => dispatch(receiveErrors(data));
  const createNoteSuccess = note => dispatch(receiveNote(note));
  const receiveNoteSuccess = note => dispatch(setContentState(note));

  switch (action.type) {
    case NoteConstants.REQUEST_NOTES:
      NoteAPI.fetchAllNotes(success, error);
      break;
    case NoteConstants.REQUEST_NOTE:
      NoteAPI.fetchNote(action.note, receiveNoteSuccess, error);
      break;
    case NoteConstants.CREATE_NOTE:
      debugger;
      NoteAPI.createNote(action.note, createNoteSuccess, error);
      break;
    default:
      break;
  }

  return next(action);
};

export default NoteMiddleware;
