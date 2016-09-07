import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { createNote } from '../../actions/note_actions';
import { setContentState } from '../../actions/editor_actions';
import Home from './home';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  activeState: state.activeState,
  editorState: state.editorState
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  createNote: note => dispatch(createNote(note)),
  setContentState: content => dispatch(setContentState(content))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
