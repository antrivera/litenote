import { ActiveStateConstants } from '../actions/active_state_actions';
import { merge } from 'lodash';

const defaultActiveState = {
  notes: true,
  notebooks: false,
  tags: false,
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
      return merge({}, defaultActiveState, {notes: false, notebooks: true});
    case ActiveStateConstants.ALL_TAGS_ACTIVE:
      return merge({}, defaultActiveState, {notes: false, tags: true});
    case ActiveStateConstants.NOTEBOOK_ACTIVE:
      const notebookContentActive = {
        notes: true,
        notebooks: false,
        currentNotebook: {
          title: `${action.notebook.title}`,
          id: action.notebook.id
        }
      };
      return merge({}, defaultActiveState, notebookContentActive);
    case ActiveStateConstants.ACTIVE_NOTE:
      return merge({}, state, {activeNote: action.note});
    default:
      return state;
  }
};

export default ActiveStateReducer;
