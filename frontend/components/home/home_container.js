import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { createNote, updateNote } from '../../actions/note_actions';
import { setContentState } from '../../actions/editor_actions';
import Home from './home';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  activeState: state.activeState,
  editorState: state.editorState,
  defaultNotebook: state.defaultNotebook,
  notebooks: state.notebooks
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  createNote: note => dispatch(createNote(note)),
  updateNote: note => dispatch(updateNote(note)),
  setContentState: content => dispatch(setContentState(content))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
