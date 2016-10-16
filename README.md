# Litenote

[Litenote][heroku]

[heroku]: https://react-note-app.herokuapp.com

Litenote is a full-stack web application inspired by Evernote.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

### Single-Page App

Litenote is a true single-page app: all content is delivered on one static page and updated dynamically. The user is greeted with a splash page prompting them to sign-up or login, and from there they are taken to the home path which displays the workspace and a sidebar menu allowing them to perform various actions.  Users can create notes, notebooks to organize their notes, and tags to group notes by common themes or content across notebooks.

### Note Rendering and Editing

  Notes are stored on the back-end in a single table in the database and contain a foreign key to the notebook that they belong to, as well as information such as their id, title, and body.  Notes have associations to their tags through a taggings join table which allows all of the tags for a given note to be acquired.

  Notes are rendered in the Workspace component and their titles are also rendered in the Sidebar component as part of the NoteIndex component, allowing users to browse notes and select the one with the title they wish to view and/or edit.


Note editing is implemented using the Draft.js library, providing users with the core rich-text-editing functionality that they are accustomed to.

### Notebooks

Notebooks have their own table in the database and have columns for their id, title, and author_id.  The author_id allows notebooks to be linked to the users who own them.  They interact with notes through a has_many association.

The React component structure for notebooks is very similar to that of notes, however a notebook does note get rendered in the Workspace Draft.js editor.  When a notebook is selected in the sidemenu, the notes that belong to it are promptly displayed.

### Tags

Tags have a table in the database, but they are connected to notes through a Taggings join table.  Tags themselves merely have a name column, while taggings have two foreign keys: note_id and tag_id.

On the front-end, tags are very similar to notebooks in that they can be displayed in the sidemenu component, and when selected all notes with that particular tag are then displayed.


## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for Litenote are outlined below.

### Advanced RTE

Draft.js is a powerful library with many capabilities, and in the future I would like to make use of it to display pictures, videos, and more text-editing options.

### Shared Notes

I would like to allow users to share notes with each other through a shared notebook and user search.
