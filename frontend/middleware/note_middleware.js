import { NoteConstants, fetchAllNotes, receiveAllNotes, receiveNote, receiveErrors, receiveUpdatedNote } from '../actions/note_actions';
import { fetchNotebook } from '../actions/notebook_actions';
import { setContentState, emptyContentState } from '../actions/editor_actions';
import { displayNoteContent, displayNotebookContent } from '../actions/active_state_actions';
import * as NoteAPI from '../util/note_api_util';

const NoteMiddleware = ({getState, dispatch}) => next => action => {
  const receiveNoteSuccess = note => dispatch(setContentState({editorState: note.body, title: note.title}));
  const success = notes => dispatch(receiveAllNotes(notes));
  const updateNoteDisplay = notes => {
    if (notes.length === 0) {
      dispatch(emptyContentState());
      dispatch(displayNoteContent(null));
      return;
    }
    dispatch(displayNoteContent(notes[0]));
    receiveNoteSuccess(notes[0]);
  }
  const error = data => dispatch(receiveErrors(data));
  const createNoteSuccess = note => dispatch(receiveNote(note));
  const updateNoteSuccess = note => {
    dispatch(receiveUpdatedNote(note)); 
    dispatch(displayNoteContent(note));
  }

  switch (action.type) {
    case NoteConstants.REQUEST_NOTES:
      NoteAPI.fetchAllNotes(success, error);
      break;
    case NoteConstants.RECEIVE_NOTES:
      updateNoteDisplay(action.notes);
      break;
    case NoteConstants.REQUEST_NOTE:
      NoteAPI.fetchNote(action.note, receiveNoteSuccess, error);
      break;
    case NoteConstants.RECEIVE_NOTE:
      dispatch(displayNoteContent(action.note));
      break;
    case NoteConstants.CREATE_NOTE:
      NoteAPI.createNote(action.note, createNoteSuccess, error);
      break;
    case NoteConstants.UPDATE_NOTE:
      NoteAPI.updateNote(action.note, updateNoteSuccess, error);
      break;
    case NoteConstants.MOVE_NOTE:
      //TODO: refactor
      let notebookID = getState().activeState.currentNotebook.id;
      let cb;
      if (notebookID) {
        cb = () => dispatch(fetchNotebook({id: notebookID }));
      } else {
        cb = () => dispatch(fetchAllNotes());
      }

      if (getState().activeState.activeNote) {
        NoteAPI.updateNote(action.note, cb, error);
      } else {
        debugger
        dispatch(displayNotebookContent(action.notebook));
      }
      break;
    case NoteConstants.DESTROY_NOTE:
      let currentNotebookId = getState().activeState.currentNotebook.id;
      let successCallback = success;
      if (currentNotebookId) {
        successCallback = () => dispatch(fetchNotebook({id: currentNotebookId }));
      }
      NoteAPI.deleteNote(action.note, successCallback, error);
    default:
      break;
  }

  return next(action);
};

export default NoteMiddleware;
