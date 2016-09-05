export const fetchAllNotebooks = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/notebooks',
    success,
    error
  });
};

export const createNotebook = (data, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/notebooks',
    data,
    success,
    error
  });
};