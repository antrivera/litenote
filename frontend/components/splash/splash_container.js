import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Splash from './splash';

const mapDispatchToProps = dispatch => ({
  login: (data) => dispatch(login(data))
});

export default connect(
  null,
  mapDispatchToProps
)(Splash);
