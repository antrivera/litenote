import { DefaultNotebookConstants } from '../actions/default_notebook_actions';

const DefaultNotebookReducer = (state={}, action) => {
  switch (action.type) {
    case DefaultNotebookConstants.SET_DEFAULT_NOTEBOOK:
      let defaultNotebookId;

      action.notebooks.forEach(notebook => {
        if (notebook.removable === false) {
          defaultNotebookId = notebook.id;
          return;
        }
      });

      const defaultNotebook = {
        id: defaultNotebookId,
        title: "General"
      };
      
      return defaultNotebook;
    default:
      return state;
  }
};

export default DefaultNotebookReducer;
