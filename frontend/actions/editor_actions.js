export const EditorConstants = {
  SET_CONTENT_STATE: "SET_CONTENT_STATE"
};

export const setContentState = content => ({
  type: EditorConstants.SET_CONTENT_STATE,
  content
});
