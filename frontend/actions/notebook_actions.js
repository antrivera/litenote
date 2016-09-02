export const NotebookConstants = {
  REQUEST_NOTEBOOKS: "REQUEST_NOTEBOOKS",
  RECEIVE_NOTEBOOKS: "RECEIVE_NOTEBOOKS",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const fetchAllNotebooks = () => ({
  type: NotebookConstants.REQUEST_NOTEBOOKS
});

export const receiveAllNotebooks = notebooks => ({
  type: NotebookConstants.RECEIVE_NOTEBOOKS,
  notebooks
});

export const receiveErrors = errors => ({
  type: NotebookConstants.RECEIVE_ERRORS,
  errors
});
