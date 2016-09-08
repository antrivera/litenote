export const fetchAllNotes = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/notes',
    success,
    error
  });
};

export const fetchNote = (note, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/notes/${note.id}`,
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

export const updateNote = (data, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/notes/${data.note.id}`,
    data: {note: data.note.details},
    success,
    error
  });
};
