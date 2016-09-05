import { NoteConstants, receiveAllNotes, receiveNote, receiveErrors } from '../actions/note_actions';
import * as NoteAPI from '../util/note_api_util';

const NoteMiddleware = ({getState, dispatch}) => next => action => {
  const success = notes => dispatch(receiveAllNotes(notes));
  const error = data => dispatch(receiveErrors(data));

  switch (action.type) {
    case NoteConstants.REQUEST_NOTES:
      NoteAPI.fetchAllNotes(success, error);
      break;
    case NoteConstants.CREATE_NOTE:
      const createNoteSuccess = note => dispatch(receiveNote(note));
      NoteConstants.createNote(action.note, success, error);
      break;
    default:
      break;
  }

  return next(action);
};

export default NoteMiddleware;
