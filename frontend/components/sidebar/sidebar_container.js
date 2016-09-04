import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchAllNotebooks } from '../../actions/notebook_actions';
import Sidebar from './sidebar';

export const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  notebooks: state.notebooks
});

export const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchAllNotebooks: () => dispatch(fetchAllNotebooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
