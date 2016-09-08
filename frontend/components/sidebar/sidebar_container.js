import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchAllNotebooks, fetchNotebook, deleteNotebook } from '../../actions/notebook_actions';
import { fetchAllNotes, fetchNote, deleteNote } from '../../actions/note_actions';
import { setContentState, loadEditorContent, emptyContentState } from '../../actions/editor_actions';
import * as ActiveStateActions from '../../actions/active_state_actions';
import Sidebar from './sidebar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  notes: state.notes,
  notebooks: state.notebooks,
  activeState: state.activeState
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
  fetchNotebook: notebook => dispatch(fetchNotebook(notebook)),
  deleteNotebook: notebook => dispatch(deleteNotebook(notebook)),
  fetchAllNotes: () => dispatch(fetchAllNotes()),
  fetchNote: note => dispatch(fetchNote(note)),
  deleteNote: note => dispatch(deleteNote(note)),
  displayAllNotes: () => dispatch(ActiveStateActions.displayAllNotes()),
  displayAllNotebooks: () => dispatch(ActiveStateActions.displayAllNotebooks()),
  displayNotebookContent: notebook => dispatch(ActiveStateActions.displayNotebookContent(notebook)),
  displayNoteContent: note => dispatch(ActiveStateActions.displayNoteContent(note)),
  setContentState: content => dispatch(setContentState(content)),
  loadEditorContent: content => dispatch(loadEditorContent(content)),
  emptyContentState: () => dispatch(emptyContentState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
