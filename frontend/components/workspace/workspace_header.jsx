import React from 'react';
import NotebookDropdown from '../notebook/notebook_dropdown';
import TagDropdown from '../tag/tag_dropdown';

class WorkspaceHeader extends React.Component {
  constructor(props) {
    super(props);

    this.saveNoteContent = this.saveNoteContent.bind(this);
  }

  updateTitle() {
    return e => { this.props.setContentState({title: e.currentTarget.value}) };
  }

  saveNoteContent() {
    let note;
    if (this.props.activeState.activeNote) {
      note = {
        id: this.props.activeState.activeNote.id,
        details: {
          title: this.props.editorState.title,
          body: this.props.editorState.editorState,
          notebook_id: this.props.activeState.activeNote.notebook_id,
          tags: [""]
        }
      };
      this.props.updateNote({note});
    } else {
      let id = this.props.activeState.currentNotebook.id ? this.props.activeState.currentNotebook.id :
        this.props.defaultNotebook.id;
      note = {
        title: this.props.editorState.title,
        body: this.props.editorState.editorState,
        notebook_id: id
      };
      this.props.createNote({note});
    }
  }

  render() {
    return(
      <div className="workspace-header">

        <div className="workspace-header-info">
          <NotebookDropdown
            activeNote={ this.props.activeState.activeNote }
            currentNotebook={ this.props.activeState.currentNotebook }
            defaultNotebook={ this.props.defaultNotebook }
            updateNote={ this.props.updateNote }
            moveNote={ this.props.moveNote }
            notebooks={ this.props.notebooks } />
          <TagDropdown activeNote={ this.props.activeState.activeNote } />
          <button className="save-btn" onClick={ this.saveNoteContent }>Save</button>
        </div>

        <div className="note-title-container">
          <input className="note-title-input"
            type="text"
            value={ this.props.editorState.title }
            placeholder="Title your note"
            onChange={ this.updateTitle() }
            ref="editor-title" />
        </div>
      </div>
    );
  }
}

export default WorkspaceHeader;
