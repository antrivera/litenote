import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Splash from './splash';

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login())
});

export default connect(
  mapDispatchToProps
)(Splash);
