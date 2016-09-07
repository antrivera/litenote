import React from 'react';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw, ContentState } from 'draft-js';

class Workspace extends React.Component {
  constructor(props) {
    super(props);
    this.username = this.props.currentUser.username;

    this.state = {
      editorState: this.props.editorState.editorState,
    };

    this.focus = () => this.refs.editor.focus();
    this.onChange = editorState => {
      this.props.setContentState({editorState});
    }
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.saveNoteContents = this.saveNoteContents.bind(this);
  }

  update(field) {
    return e => {this.props.setContentState({title: e.currentTarget.value});};
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }

  saveNoteContents({editorState}) {
    return () => {
      const rawContent = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
      const note = {
        title: this.props.editorState.title,
        body: rawContent,
        notebook_id: this.props.activeState.currentNotebook.id
      };

      this.props.createNote({note});
    }
  }

  render() {
    const { editorState } = this.props.editorState;
    return (
      <div className="workspace-container">
        <div className="workspace-header">
          <button className="save-btn" onClick={this.saveNoteContents({editorState})}>Save</button>
          <p>{this.props.activeState.currentNotebook.title}</p>
        </div>
        <div>
          <input className={"note-title-input"}
            type="text"
            placeholder="Title your note"
            value= {this.props.editorState.title}
            ref="editor-title"
            onChange={this.update("title")} />
        </div>
        <div className="editor-container" onClick={this.focus}>
          <Editor
            editorState={ editorState }
            onChange={ this.onChange }
            placeholder="Start typing..."
            ref="editor"
            spellCheck={true}
            />
        </div>
      </div>
    );
  }
}

export default Workspace;
