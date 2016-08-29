# Litenote

[Heroku link][heroku]

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Litenote is a web application inspired by Evernote built using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Notes
- [ ] Notebooks for organizing notes
- [ ] Tags
- [ ] Rich Text Editing
- [ ] Search by content/notebook/tag
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-heirarchy.md
[redux-structure]: docs/redux-structure.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Sidebar component
- [ ] Style signup/signin and sidebar components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Notes Model, API, and components (2 days)

**Objective:** Notes can be created, read, edited and destroyed through
the API.

- [ ] `Note` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for notes (`NotesController`)
- [ ] JBuilder views for notes
- Note components and respective Redux loops
  - [ ] `NotesIndex`
  - [ ] `NoteIndexItem`
  - [ ] `NoteForm`
- [ ] Style notes components
- [ ] Seed notes
- [ ] Autosave notes feature [depending on progress]

### Phase 3: Notebooks (2 days)

**Objective:** Notes belong to Notebooks that can be created, read, edited and destroyed through the API.

- [ ] `Notebook` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for notes (`NotebooksController`)
- [ ] JBuilder views for notebooks
- [ ] Notes placed in 'General' notebook by default
- [ ] Moving notes between notebooks
- [ ] Viewing notes by notebook
- [ ] Style notebook components
- [ ] Seed notebooks

### Phase 4: Tags and Preliminary Styling (1 day)

**Objective:** Notes can be tagged with multiple tags

- [ ] `Tag` model and `Taggings` join table
- [ ] Fetching tags for notes
- [ ] Adding tags to notes
- [ ] Style components into general structure to be present in final product
- [ ] Seed tags with seed data

### Phase 5: Allow Complex Styling in Notes (1 days, W2 Th 6pm)

**Objective:** Allow rich text editing of notes.

- [ ] Integrate `draft-js` (Draft.js RTE framework for React).
- [ ] Rails helpers to sanitize HTML before rendering.
- [ ] Style Draft.js components.
- [ ] Add Draft.js styling to seeded notes

### Phase 6: - Search and Final Styling (1 day, W2 F 6pm)

**Objective:** Add search and complete styling

- [ ] Search by note content, notebook, and tags
- [ ] Implement search redux cycle
- [ ] Auto display search results as user types, organized by result category (note/notebook/tag)

### Bonus Features (TBD)
- [ ] Infinite Scroll / Pagination
- [ ] Publish/Share notes with other users
- [ ] Set reminders on notes
- [ ] Implement a slider to revert to previous saved versions of notes
- [ ] Support for pictures/videos/audio
- [ ] Toggle grid view of notes / notebooks
- [ ] Integration with Dropbox
- [ ] Multiple sessions
