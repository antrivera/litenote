import { ActiveStateConstants } from '../actions/active_state_actions';
import { merge } from 'lodash';

const defaultActiveState = {
  notes: "open",
  notebooks: "closed",
  tags: "closed",
  currentNotebook: {
    title: "Notes",
    id: null
  },
  activeNote: null
};

const ActiveStateReducer = (state= defaultActiveState, action) => {
  switch (action.type) {
    case ActiveStateConstants.ALL_NOTES_ACTIVE:
      return defaultActiveState;
    case ActiveStateConstants.ALL_NOTEBOOKS_ACTIVE:
      return merge({}, state, {notes: "closed", notebooks: "open", tags: "closed"});
    case ActiveStateConstants.ALL_TAGS_ACTIVE:
      return merge({}, state, {notes: "closed", notebooks: "closed", tags: "open"});
    case ActiveStateConstants.NOTEBOOK_ACTIVE:
      const notebookContentActive = {
        notes: "open",
        notebooks: "closed",
        currentNotebook: {
          title: `${action.notebook.title}`,
          id: action.notebook.id
        }
      };
      return merge({}, defaultActiveState, notebookContentActive);
    case ActiveStateConstants.TAG_ACTIVE:
      //// TODO: something here?
      return defaultActiveState;
    case ActiveStateConstants.ACTIVE_NOTE:
      return merge({}, state, {activeNote: action.note});
    case ActiveStateConstants.CLOSE_DRAWER:
      return merge({}, state, {notes: "open", notebooks: "closed", tags: "closed"});
    default:
      return state;
  }
};

export default ActiveStateReducer;
