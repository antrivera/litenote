import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchAllNotebooks, fetchNotebook, deleteNotebook } from '../../actions/notebook_actions';
import { fetchAllNotes, fetchNote, deleteNote, filterNotes } from '../../actions/note_actions';
import { fetchAllTags, fetchTaggedNotes } from '../../actions/tag_actions';
import { setContentState, loadEditorContent, emptyContentState } from '../../actions/editor_actions';
import { filteredNotes } from '../../reducers/selectors';
import * as ActiveStateActions from '../../actions/active_state_actions';
import Sidebar from './sidebar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  notes: state.notes,
  filteredNotes: filteredNotes(state),
  notebooks: state.notebooks,
  tags: state.tags,
  activeState: state.activeState
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
  fetchNotebook: notebook => dispatch(fetchNotebook(notebook)),
  deleteNotebook: notebook => dispatch(deleteNotebook(notebook)),
  fetchAllNotes: () => dispatch(fetchAllNotes()),
  fetchNote: note => dispatch(fetchNote(note)),
  fetchAllTags: () => dispatch(fetchAllTags()),
  fetchTaggedNotes: tag => dispatch(fetchTaggedNotes(tag)),
  deleteNote: note => dispatch(deleteNote(note)),
  displayAllNotes: () => dispatch(ActiveStateActions.displayAllNotes()),
  closeDrawer: () => dispatch(ActiveStateActions.closeDrawer()),
  displayAllNotebooks: () => dispatch(ActiveStateActions.displayAllNotebooks()),
  displayAllTags: () => dispatch(ActiveStateActions.displayAllTags()),
  displayTaggedNotes: tag => dispatch(ActiveStateActions.displayTaggedNotes(tag)),
  displayNotebookContent: notebook => dispatch(ActiveStateActions.displayNotebookContent(notebook)),
  displayNoteContent: note => dispatch(ActiveStateActions.displayNoteContent(note)),
  setContentState: content => dispatch(setContentState(content)),
  loadEditorContent: content => dispatch(loadEditorContent(content)),
  emptyContentState: () => dispatch(emptyContentState()),
  filterNotes: term => dispatch(filterNotes(term))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
