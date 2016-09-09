import { TagConstants } from '../actions/tag_actions';

const TagReducer = (state=[], action) => {
  switch (action.type) {
    case TagConstants.RECEIVE_TAGS:
      return action.tags
    default:
      return state;
  }
};

export default TagReducer;
