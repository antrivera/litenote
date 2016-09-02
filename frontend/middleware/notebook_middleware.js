import { NotebookConstants, receiveAllNotebooks, receiveErrors } from '../actions/notebook_actions';
import * as NotebookAPI from '../util/notebook_api_util';

const NotebookMiddleware = ({getState, dispatch}) => next => action => {
  const error = data => dispatch(receiveErrors(data));
  const success = data => dispatch(receiveAllNotebooks(data));

  switch (action.type) {
    case NotebookConstants.REQUEST_NOTEBOOKS:
      NotebookAPI.fetchAllNotebooks(success, error);
      break;
    default:
      break;
  }

  return next(action);
};

export default NotebookMiddleware;
