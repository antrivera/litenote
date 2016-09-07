import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import NotebookReducer from './notebook_reducer';
import NoteReducer from './note_reducer';
import ActiveStateReducer from './active_state_reducer';
import EditorStateReducer from './editor_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  notebooks: NotebookReducer,
  notes: NoteReducer,
  activeState: ActiveStateReducer,
  editorState: EditorStateReducer
});

export default RootReducer;
