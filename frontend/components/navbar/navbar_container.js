import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Navbar from './navbar';

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login())
});

export default connect(
  mapDispatchToProps
)(Navbar);
