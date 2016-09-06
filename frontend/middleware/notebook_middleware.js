import { NotebookConstants, receiveAllNotebooks, receiveErrors, receiveNotebook } from '../actions/notebook_actions';
import { receiveAllNotes } from '../actions/note_actions';
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
    case NotebookConstants.CREATE_NOTEBOOK:
    const createNotebookSucces = notebook => dispatch(receiveNotebook(notebook));
      NotebookAPI.createNotebook(action.notebook, createNotebookSucces, error);
      break;
    default:
      break;
  }

  return next(action);
};

export default NotebookMiddleware;
