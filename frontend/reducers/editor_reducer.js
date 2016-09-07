import { EditorConstants } from '../actions/editor_actions';
import { merge } from 'lodash';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw, ContentState } from 'draft-js';

const defaultEditorState = {
  editorState: EditorState.createEmpty(),
  title: ""
};

const EditorStateReducer = (state= defaultEditorState, action) => {
  switch (action.type) {
    case EditorConstants.EMPTY_CONTENT_STATE:
      return defaultEditorState;
    case EditorConstants.SET_CONTENT_STATE:
      const { editorState } = action.content;
      return merge({}, state, {editorState}, {title: action.content.title});
    case EditorConstants.LOAD_EDITOR_STATE:
      const rawContent = JSON.parse(action.content.body);
      const contentState = convertFromRaw(rawContent);
      return merge({}, defaultEditorState,
        {editorState: EditorState.createWithContent(contentState), title: action.content.title}
      );
    default:
      return state;
  }
};

export default EditorStateReducer;
