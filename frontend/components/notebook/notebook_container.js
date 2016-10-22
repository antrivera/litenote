import { connect } from 'react-redux';
import { displayNotebookContent } from '../../actions/active_state_actions';
import * as NotebookActions from '../../actions/notebook_actions';
import NotebookIndex from './notebook_index';

const mapDispatchToProps = dispatch => ({
  fetchAllNotebooks: () => dispatch(NotebookActions.fetchAllNotebooks()),
  displayNotebookContent: notebook => dispatch(displayNotebookContent(notebook)),
  fetchNotebook: notebook => dispatch(NotebookActions.fetchNotebook(notebook)),
  deleteNotebook: notebook => dispatch(NotebookActions.deleteNotebook(notebook))
});

export default connect(
  null,
  mapDispatchToProps
)(NotebookIndex)
