export const fetchAllTags = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/tags',
    success,
    error
  });
};
