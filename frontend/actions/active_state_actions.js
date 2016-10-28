export const ActiveStateConstants = {
  ALL_NOTES_ACTIVE: "ALL_NOTES_ACTIVE",
  ALL_NOTEBOOKS_ACTIVE: "ALL_NOTEBOOKS_ACTIVE",
  ALL_TAGS_ACTIVE: "ALL_TAGS_ACTIVE",
  NOTEBOOK_ACTIVE: "NOTEBOOK_ACTIVE",
  TAG_ACTIVE: "TAG_ACTIVE",
  ACTIVE_NOTE: "ACTIVE_NOTE",
  CLOSE_DRAWER: "CLOSE_DRAWER"
};

export const displayAllNotes = () => ({
  type: ActiveStateConstants.ALL_NOTES_ACTIVE
});

export const displayAllNotebooks = () => ({
  type: ActiveStateConstants.ALL_NOTEBOOKS_ACTIVE
});

export const displayAllTags = () => ({
  type: ActiveStateConstants.ALL_TAGS_ACTIVE
});

export const displayNotebookContent = notebook => ({
  type: ActiveStateConstants.NOTEBOOK_ACTIVE,
  notebook
});

export const displayTaggedNotes = tag => ({
  type: ActiveStateConstants.TAG_ACTIVE,
  tag
});

export const displayNoteContent = note => ({
  type: ActiveStateConstants.ACTIVE_NOTE,
  note
});

export const closeDrawer = () => {
  document.getElementsByClassName('workspace-container')[0].style.opacity = 1;
  return ({
    type: ActiveStateConstants.CLOSE_DRAWER
  });
};
