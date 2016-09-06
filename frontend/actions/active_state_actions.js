export const ActiveStateConstants = {
  ALL_NOTES_ACTIVE: "ALL_NOTES_ACTIVE",
  ALL_NOTEBOOKS_ACTIVE: "ALL_NOTEBOOKS_ACTIVE",
  NOTEBOOK_ACTIVE: "NOTEBOOK_ACTIVE"
};

export const displayAllNotes = () => ({
  type: ActiveStateConstants.ALL_NOTES_ACTIVE
});

export const displayAllNotebooks = () => ({
  type: ActiveStateConstants.ALL_NOTEBOOKS_ACTIVE
});

export const displayNotebookContent = notebook => ({
  type: ActiveStateConstants.NOTEBOOK_ACTIVE,
  notebook
});
