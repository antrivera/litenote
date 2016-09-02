import { connect } from 'react-redux';
import SideMenu from './side_menu';

// TODO: include notes/notebook state info

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

// const mapDispatchToProps = dispatch => ({
//
// });

export default connect(
  mapStateToProps
)(SideMenu);
