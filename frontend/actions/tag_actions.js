export const TagConstants = {
  REQUEST_TAGS: "REQUEST_TAGS",
  RECEIVE_TAGS: "RECEIVE_TAGS",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const fetchAllTags = () => ({
  type: TagConstants.REQUEST_TAGS
});

export const receiveAllTags = tags => ({
  type: TagConstants.RECEIVE_TAGS,
  tags
});

export const receiveErrors = errors => ({
  type: TagConstants.RECEIVE_ERRORS,
  errors
});
