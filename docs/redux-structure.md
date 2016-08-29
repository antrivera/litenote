# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

## Auth Cycles
### Session API Request Actions
- `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. calls `POST /api/users`
  0. success callback is `receiveCurrentUser`
- `logIn`
  0. invoked from `SigninForm` `onSubmit`
  0. calls `POST /api/session`
  0. success callback is `receiveCurrentUser`
- `logOut`
  0. invoked from `Sidebar` `onClick`
  0. calls `DELETE /api/session`
  0. success callback is `removeCurrentUser`
- `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. calls `GET /api/session`
  0. success callback is `receiveCurrentUser`

### Session API Response Actions
- `receiveCurrentUser`
  0. invoked from API callback
  0. the `SessionReducer` stores `currentUser` in the application's state
- `removeCurrentUser`
  0. invoked from API callback
  0. the `SessionReducer` removes `currentUser` from the application's state

## Error Cycles
### Error API Response Actions
- `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in application's state; `errors` are mapped to their respective forms
- `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes the `errors` from application's state for a given `form`

## Note Cycles
### Notes API Request Actions
- `fetchAllNotes`
  0. invoked from `NotesIndex` `didMount`/`willReceiveProps`
  0. calls `GET /api/notes`
  0. success callback is `receiveAllNotes`
- `createNote`
  0. invoked from new note button `onClick`
  0. calls `POST /api/notes`
  0. success callback is `receiveNote`
- `fetchNote`
  0. invoked from `NoteDetail` `didMount`/`willReceiveProps`
  0. calls `GET /api/notes/:id`
  0. success callback is `receiveNote`
- `updateNote`
  0. invoked from `NoteForm` `onSubmit`
  0. calls `PATCH /api/notes/:id`
  0. success callback is `receiveNote`
- `destroyNote`
  0. invoked from delete note button `onClick`
  0. calls `DELETE /api/notes/:id`
  0. success callback is `removeNote`


### Notes API Response Actions
- `receiveAllNotes`
  0. invoked from API callback
  0. the `NoteReducer` updates `notes` in application's state
- `receiveNote`
  0. invoked from API callback
  0. the `NoteReducer` updates `notes[id]` in application's state
- `removeNote`
  0. invoked from API callback
  0. the `NoteReducer` removes `notes` from application's state


## Notebook Cycles
### Notebooks API Request Actions
- `fetchAllNotebooks`
  0. invoked from `NotebooksIndex` `didMount`/`willReceiveProps`
  0. calls `GET /api/notebooks`
  0. success callback is `receiveAllNotebooks`
- `createNotebook`
  0. invoked from new notebook button `onClick`
  0. calls `POST /api/notebooks`
  0. success callback is `receiveNotebook`
- `fetchNotebook`
  0. invoked from `NotebooksDetail` `didMount`/`willReceiveProps`
  0. calls `GET /api/notebooks/:id`
  0. success callback is `receiveNotebook`
- `updateNotebook`
  0. invoked from `NotebookForm` `onSubmit`
  0. calls `PATCH /api/notebooks/:id`
  0. success callback is `receiveNotebook`
- `destroyNotebook`
  0. invoked from delete notebook button `onClick`
  0. calls `DELETE /api/notebooks/:id`
  0. success callback is `removeNotebook`

### Notebooks API Response Actions
- `receiveAllNotebooks`
  0. invoked from API callback
  0. the `NotebookReducer` updates `notebooks` in application's state
- `receiveNotebook`
  0. invoked from API callback
  0. the `NotebookReducer` updates `notebooks[id]` in application's state
- `removeNotebook`
  0. invoked from API callback
  0. the `NotebookReducer` removes `notebooks` in application's state

## SearchSuggestion Cycles
### SearchSuggestion Request Actions
- `fetchSearchSuggestions`
  0. invoked from `SearchBar` `onChange` when text is present
  0. calls `GET /api/notes` with `text` param
  0. success callback is `receiveSearchSuggestions`

### SearchSuggestion Response Actions
- `receiveSearchSuggestions`
  0. invoked from API callback
  0. the `SearchSuggestionReducer` updates `suggestions` in application's state
- `removeSearchSuggestions`
  0. invoked from `SearchBar` `onChange` when empty
  0. the `SearchSuggestionReducer` removes `suggestions` from application's state
