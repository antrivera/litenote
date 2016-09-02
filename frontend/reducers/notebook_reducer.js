import { NotebookConstants } from '../actions/notebook_actions';
import { merge } from 'lodash';

const NotebookReducer = (state= [], action) => {
  switch (action.type) {
    case NotebookConstants.RECEIVE_NOTEBOOKS:
      return action.notebooks
    case NotebookConstants.RECEIVE_ERRORS:

    default:
      return state;
  }
};

export default NotebookReducer;
