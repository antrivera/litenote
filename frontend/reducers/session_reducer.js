import {SessionConstants} from '../actions/session_actions';
import { merge } from 'lodash';

const _defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      return merge({}, _defaultState, {currentUser: action.data});
    case SessionConstants.RECEIVE_ERRORS:
      return merge({}, _defaultState, {errors: [action.data]});
    case SessionConstants.LOGOUT:
      return merge({}, _defaultState);
    default:
      return state;
  }
};

export default SessionReducer;
