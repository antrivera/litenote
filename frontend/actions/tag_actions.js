export const TagConstants = {
  REQUEST_TAGS: "REQUEST_TAGS",
  REQUEST_TAGGED_NOTES: "REQUEST_TAGGED_NOTES",
  DELETE_TAG: "DELETE_TAG",
  RECEIVE_TAGS: "RECEIVE_TAGS",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const fetchAllTags = () => ({
  type: TagConstants.REQUEST_TAGS
});

export const fetchTaggedNotes = tag => ({
  type: TagConstants.REQUEST_TAGGED_NOTES,
  tag
});

export const deleteTag = tag => ({
  type: TagConstants.DELETE_TAG,
  tag
});

export const receiveAllTags = tags => ({
  type: TagConstants.RECEIVE_TAGS,
  tags
});

export const receiveErrors = errors => ({
  type: TagConstants.RECEIVE_ERRORS,
  errors
});
