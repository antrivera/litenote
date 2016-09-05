export const NotebookConstants = {
  REQUEST_NOTEBOOKS: "REQUEST_NOTEBOOKS",
  CREATE_NOTEBOOK: "CREATE_NOTEBOOK",
  RECEIVE_NOTEBOOKS: "RECEIVE_NOTEBOOKS",
  RECEIVE_NOTEBOOK: "RECEIVE_NOTEBOOK",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
  CLEAR_NOTEBOOKS_STATE: "CLEAR_NOTEBOOKS_STATE"
};

export const fetchAllNotebooks = () => ({
  type: NotebookConstants.REQUEST_NOTEBOOKS
});

export const createNotebook = notebook => ({
  type: NotebookConstants.CREATE_NOTEBOOK,
  notebook
});

export const receiveAllNotebooks = notebooks => ({
  type: NotebookConstants.RECEIVE_NOTEBOOKS,
  notebooks
});

export const receiveNotebook = notebook => ({
  type: NotebookConstants.RECEIVE_NOTEBOOK,
  notebook
});

export const receiveErrors = errors => ({
  type: NotebookConstants.RECEIVE_ERRORS,
  errors
});

export const clearNotebooksState = () => ({
  type: NotebookConstants.CLEAR_NOTEBOOKS_STATE
});
