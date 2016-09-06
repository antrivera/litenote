export const fetchAllNotes = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/notes',
    success,
    error
  });
};

export const createNote = (data, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/notes',
    data,
    success,
    error
  });
};