export const EditorConstants = {
  LOAD_EDITOR_STATE: "LOAD_EDITOR_STATE",
  SET_CONTENT_STATE: "SET_CONTENT_STATE"
};

export const setContentState = content => ({
  type: EditorConstants.SET_CONTENT_STATE,
  content
});

export const loadEditorContent = content => ({
  type: EditorConstants.LOAD_EDITOR_STATE,
  content
});
