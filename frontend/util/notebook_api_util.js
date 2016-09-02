export const fetchAllNotebooks = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/notebooks',
    success,
    error
  });
};
