import { connect } from 'react-redux';
import AppRouter from './router';

const mapStateToProps = state => {
  return ({
    currentUser: state.session.currentUser
  });
};

export default connect(
  mapStateToProps
)(AppRouter);
