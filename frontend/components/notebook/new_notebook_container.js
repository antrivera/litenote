import { connect } from 'react-redux';
import { createNotebook } from '../../actions/notebook_actions';
import NewNotebook from './new_notebook';

const mapDispatchToProps = dispatch => ({
  createNotebook: (data) => dispatch(createNotebook(data))
});

export default connect(
  null,
  mapDispatchToProps
)(NewNotebook);
