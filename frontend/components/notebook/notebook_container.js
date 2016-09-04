import { connect } from 'react-redux';
import { fetchAllNotebooks, createNotebook } from '../../actions/notebook_actions';
import NotebookIndex from './notebook_index';

const mapStateToProps = state => ({
  notebooks: state.notebooks
});

const mapDispatchToProps = dispatch => ({
  fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
  createNotebook: data => dispatch(createNotebook())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookIndex);
