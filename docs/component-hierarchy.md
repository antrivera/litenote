## Component Hierarchy

**AuthFormContainer**
- AuthForm

**HomeContainer**
- Sidebar
- Home

**Home**
- NotesContainer
- NoteBooksContainer
- TagsContainer
- NoteIndexItem

**NotesContainer**
- NotesHeader
  - NoteIndex

**NoteIndex**
- NoteIndexItem
  - NoteDetail
  - RTETools
  - Tags

**NoteBookContainer**
- NoteBookHeader
  - NoteIndex

**NoteBookIndex**
- NoteBookIndexItem

**NewNotebook**
- NewNotebook

**TagContainer**
- NoteHeader
  - NoteIndex

**Search**

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/note/:noteId" | "NotesContainer" |
| "/home/notebook/:notebookId/note/:noteId" | "NotebookContainer" |
| "/home/tag/:tagId/note/:noteId" | "TagContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-note" | "NewNoteContainer" |
| "/new-notebook" | "NewNotebook" |
| "/search" | "Search" |
