import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import NotebookReducer from './notebook_reducer';
import TagReducer from './tag_reducer';
import NoteReducer from './note_reducer';
import ActiveStateReducer from './active_state_reducer';
import EditorStateReducer from './editor_reducer';
import DefaultNotebookReducer from './default_notebook_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  notebooks: NotebookReducer,
  notes: NoteReducer,
  tags: TagReducer,
  activeState: ActiveStateReducer,
  editorState: EditorStateReducer,
  defaultNotebook: DefaultNotebookReducer
});

export default RootReducer;
