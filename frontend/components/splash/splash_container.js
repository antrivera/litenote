import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  login: (data) => dispatch(login(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
