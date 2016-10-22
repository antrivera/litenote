export const DefaultNotebookConstants = {
  SET_DEFAULT_NOTEBOOK: "SET_DEFAULT_NOTEBOOK"
}

export const setDefaultNotebook = notebooks => ({
  type: DefaultNotebookConstants.SET_DEFAULT_NOTEBOOK,
  notebooks
});
