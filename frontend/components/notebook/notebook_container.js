import { connect } from 'react-redux';
import { fetchAllNotebooks } from '../../actions/notebook_actions';
import Notebook from './notebook';

const mapStateToProps = state => ({
  notebooks: state.notebooks
});

const mapDispatchToProps = dispatch => ({
  fetchAllNotebooks: () => dispatch(fetchAllNotebooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notebook);
