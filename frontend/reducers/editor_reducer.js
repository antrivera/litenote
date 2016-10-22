import { EditorConstants } from '../actions/editor_actions';
import { merge } from 'lodash';

const defaultEditorState = {
  editorState: "",
  title: ""
};

const EditorStateReducer = (state= defaultEditorState, action) => {
  switch (action.type) {
    case EditorConstants.EMPTY_CONTENT_STATE:
      return defaultEditorState;
    case EditorConstants.SET_CONTENT_STATE:
      // debugger
      const { editorState } = action.content;
      const { title } = action.content;
      // debugger
      return merge({}, state, {editorState}, {title});
    case EditorConstants.LOAD_EDITOR_STATE:
      debugger
      // const rawContent = JSON.parse(action.content.body);
      // const contentState = convertFromRaw(rawContent);
      // return merge({}, defaultEditorState,
      //   {editorState: EditorState.createWithContent(contentState), title: action.content.title}
      // );
    default:
      return state;
  }
};

export default EditorStateReducer;
