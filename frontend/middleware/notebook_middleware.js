import { NotebookConstants, receiveAllNotebooks, receiveErrors, receiveNotebook, fetchNotebook } from '../actions/notebook_actions';
import { receiveAllNotes, fetchAllNotes } from '../actions/note_actions';
import { setDefaultNotebook } from '../actions/default_notebook_actions';
import { displayNotebookContent } from '../actions/active_state_actions';
import * as NotebookAPI from '../util/notebook_api_util';

const NotebookMiddleware = ({getState, dispatch}) => next => action => {
  const error = data => dispatch(receiveErrors(data));
  const success = data => dispatch(receiveAllNotebooks(data));

  switch (action.type) {
    case NotebookConstants.REQUEST_NOTEBOOKS:
      NotebookAPI.fetchAllNotebooks(success, error);
      break;
    case NotebookConstants.REQUEST_NOTEBOOK:
      const requestNotebookSuccess = data => dispatch(receiveAllNotes(data));
      NotebookAPI.fetchNotebook(action.notebook, requestNotebookSuccess, error);
      break;
    case NotebookConstants.RECEIVE_NOTEBOOKS:
      dispatch(setDefaultNotebook(action.notebooks));
      break;
    case NotebookConstants.CREATE_NOTEBOOK:
      const createNotebookSucces = notebook => dispatch(receiveNotebook(notebook));
      NotebookAPI.createNotebook(action.notebook, createNotebookSucces, error);
      break;
    case NotebookConstants.DESTROY_NOTEBOOK:
      let currentNotebookId = getState().activeState.currentNotebook.id;
      let successCallback = data => {
          dispatch(receiveAllNotebooks(data));
          if (!currentNotebookId || action.notebook.id === currentNotebookId) {
            dispatch(fetchAllNotes());
            dispatch(displayNotebookContent({title: "Notes", id: null}));
          }
      }
      NotebookAPI.deleteNotebook(action.notebook, successCallback, error);
      break;
    default:
      break;
  }

  return next(action);
};

export default NotebookMiddleware;
