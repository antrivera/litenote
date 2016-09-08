import React from 'react';
import BlockStyleControls from './block_style_controls';
import InlineStyleControls from './inline_style_controls';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw, ContentState } from 'draft-js';

class Workspace extends React.Component {
  constructor(props) {
    super(props);
    this.username = this.props.currentUser.username;

    this.state = {
      editorState: this.props.editorState.editorState,
    };

    this.focus = () => this.refs.editor.focus();
    this.onChange = editorState => this.props.setContentState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.saveNoteContents = this.saveNoteContents.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onTab = e => this._onTab(e);
    this.toggleBlockType = type => this._toggleBlockType(type);
    this.toggleInlineStyle = style => this._toggleInlineStyle(style);
  }

  update(field) {
    return e => {this.props.setContentState({title: e.currentTarget.value});};
  }

  handleKeyCommand(command) {
    const { editorState } = this.props.editorState;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }

    return false;
  }

  _onBoldClick() {
    const { editorState } = this.props.editorState;
    const newState = RichUtils.toggleInlineStyle(editorState, 'BOLD');
    if (newState) {
      this.onChange(newState);
      return true;
    }

    return false;
  }

  _toggleBlockType(blockType) {
    const { editorState } = this.props.editorState;
    this.onChange(
      RichUtils.toggleBlockType(editorState, blockType)
    );
  }

  _toggleInlineStyle(inlineStyle) {
    const { editorState } = this.props.editorState;
    this.onChange(
      RichUtils.toggleInlineStyle(editorState, inlineStyle)
    );
  }

  _onTab(e) {
    const { editorState } = this.props.editorState;
    const maxDepth = 4;
    this.onChange(
      RichUtils.onTab(e, editorState)
    );
  }

  saveNoteContents({editorState}) {
    return () => {
      const rawContent = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
      const note = {
        id: this.props.activeState.activeNote.id,
        details: {
          title: this.props.editorState.title,
          body: rawContent,
          notebook_id: this.props.activeState.activeNote.notebook_id
        }
      };
      this.props.updateNote({note});
    }
  }

  render() {
    const { editorState } = this.props.editorState;

    let className = 'editor-container';
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' editor-container-hide-placeholder';
      }
    }

    return (
      <div className="workspace-container">
        <div className="workspace-header">
          <p>{this.props.activeState.currentNotebook.title}</p>
          <div className="rich-text-editor">
            <BlockStyleControls
              editorState={ editorState }
              onToggle={ this.toggleBlockType }
            />
            <InlineStyleControls
              editorState={ editorState }
              onToggle={ this.toggleInlineStyle }
            />
          </div>
        </div>
        <div className="note-title-container">
          <input className={"note-title-input"}
            type="text"
            placeholder="Title your note"
            value= {this.props.editorState.title}
            ref="editor-title"
            onChange={this.update("title")} />
            <button className="save-btn" onClick={this.saveNoteContents({editorState})}>Save</button>
        </div>
        <div className={ className } onClick={this.focus}>
          <Editor
            editorState={ editorState }
            handleKeyCommand={this.handleKeyCommand}
            onChange={ this.onChange }
            onTab={ this.onTab }
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
