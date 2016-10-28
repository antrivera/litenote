import { TagConstants, fetchAllTags, receiveAllTags, receiveErrors } from '../actions/tag_actions';
import { receiveAllNotes } from '../actions/note_actions';
import * as TagAPI from '../util/tag_api_util';

const TagMiddleware = ({getState, dispatch}) => next => action => {
  const success = tags => dispatch(receiveAllTags(tags));
  const error = data => dispatch(receiveErrors(data));

  switch (action.type) {
    case TagConstants.REQUEST_TAGS:
      TagAPI.fetchAllTags(success, error);
      break;
    case TagConstants.REQUEST_TAGGED_NOTES:
      const requestTaggedNotesSuccess = data => dispatch(receiveAllNotes(data));
      TagAPI.fetchTaggedNotes(action.tag, requestTaggedNotesSuccess, error)
      break;
    case TagConstants.DELETE_TAG:
      TagAPI.deleteTag(action.tag, success, error);
      break;
    default:
      break;
  }
  return next(action);
};

export default TagMiddleware;
