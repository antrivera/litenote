import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = state => {
  return({
    loggedIn: state.session.currentUser,
    errors: state.session.errors

  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return ({
    processForm: data => dispatch(processForm(data)),
    formType
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
