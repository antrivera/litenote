import {SessionConstants, receiveCurrentUser, receiveErrors} from '../actions/session_actions';
import * as SessionAPI from '../util/session_api_util';

const SessionMiddleware = ({getState, dispatch}) => next => action => {
  const error = data => dispatch(receiveErrors(data));
  const authSuccess = data => dispatch(receiveCurrentUser(data));

  switch (action.type) {
    case SessionConstants.SIGNUP:
      SessionAPI.signUp(action.data, authSuccess, error);
      break;
    case SessionConstants.LOGIN:
      SessionAPI.login(action.data, authSuccess, error);
      break;
    case SessionConstants.LOGOUT:
      const logoutSuccess = () => next(action);
      SessionAPI.logout(logoutSuccess, error);
      break;
    default:
      break;
  }

  return next(action);
};

export default SessionMiddleware;
