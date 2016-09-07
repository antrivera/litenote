import { connect } from 'react-redux';
import { createNote } from '../../actions/note_actions';
import NewNote from './new_note';

const mapStateToProps = state => ({
  activeState: state.activeState
});

const mapDispatchToProps = dispatch => ({
  createNote: (data) => dispatch(createNote(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNote);
