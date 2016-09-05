import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchAllNotebooks } from '../../actions/notebook_actions';
import { fetchAllNotes } from '../../actions/note_actions';
import Sidebar from './sidebar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  notebooks: state.notebooks
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
  fetchAllNotes: () => dispatch(fetchAllNotes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
