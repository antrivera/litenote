export const filteredNotes = ({notes}) => (
  notes.notes.filter(note => note.title.toLowerCase().includes(notes.searchTerm.toLowerCase()))
);
