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
  let formType = (ownProps.location && ownProps.location.pathname.slice(1) === 'login') ? 'login' : ownProps.formType;
  if (!formType) {
    formType = 'signup';
  }
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
