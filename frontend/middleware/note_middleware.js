import { NoteConstants, receiveAllNotes, receiveNote, receiveErrors, receiveUpdatedNote } from '../actions/note_actions';
import { setContentState } from '../actions/editor_actions';
import * as NoteAPI from '../util/note_api_util';

const NoteMiddleware = ({getState, dispatch}) => next => action => {
  const success = notes => dispatch(receiveAllNotes(notes));
  const error = data => dispatch(receiveErrors(data));
  const createNoteSuccess = note => dispatch(receiveNote(note));
  const updateNoteSuccess = note => dispatch(receiveUpdatedNote(note));  // dispatch to update active state/ editor ?
  const receiveNoteSuccess = note => dispatch(setContentState(note));

  switch (action.type) {
    case NoteConstants.REQUEST_NOTES:
      NoteAPI.fetchAllNotes(success, error);
      break;
    case NoteConstants.REQUEST_NOTE:
      NoteAPI.fetchNote(action.note, receiveNoteSuccess, error);
      break;
    case NoteConstants.CREATE_NOTE:
      NoteAPI.createNote(action.note, createNoteSuccess, error);
      break;
    case NoteConstants.UPDATE_NOTE:
      NoteAPI.updateNote(action.note, updateNoteSuccess, error);
      break;
    default:
      break;
  }

  return next(action);
};

export default NoteMiddleware;
