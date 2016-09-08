export const fetchAllNotebooks = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/notebooks',
    success,
    error
  });
};

export const fetchNotebook = (notebook, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/notebooks/${notebook.id}`,
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

export const deleteNotebook = (notebook, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/notebooks/${notebook.id}`,
    success,
    error
  });
};
