export const EditorConstants = {
  EMPTY_CONTENT_STATE: "EMPTY_CONTENT_STATE",
  LOAD_EDITOR_STATE: "LOAD_EDITOR_STATE",
  SET_CONTENT_STATE: "SET_CONTENT_STATE"
};

export const setContentState = content => {
  // debugger
  return {
  type: EditorConstants.SET_CONTENT_STATE,
  content
}};

export const loadEditorContent = content => ({
  type: EditorConstants.LOAD_EDITOR_STATE,
  content
});

export const emptyContentState = () => ({
  type: EditorConstants.EMPTY_CONTENT_STATE
});
