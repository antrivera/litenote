import { ActiveStateConstants } from '../actions/active_state_actions';
import { merge } from 'lodash';

const defaultActiveState = {
  notes: true,
  notebooks: false,
  notebookContents: false
};

const ActiveStateReducer = (state= defaultActiveState, action) => {
  switch (action.type) {
    case ActiveStateConstants.ALL_NOTES_ACTIVE:
      return defaultActiveState;
    case ActiveStateConstants.ALL_NOTEBOOKS_ACTIVE:
      return merge({}, defaultActiveState, {notes: false, notebooks: true});
    default:
      return state;
  }
};

export default ActiveStateReducer;
