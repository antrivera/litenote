export const fetchAllTags = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/tags',
    success,
    error
  });
};

export const fetchTaggedNotes = (tag, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/tags/${tag.id}`,
    success,
    error
  });
};
