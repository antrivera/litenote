import React from 'react';
import  ReactQuill from 'react-quill';
import { hashHistory } from 'react-router';
import WorkspaceHeader from './workspace_header';

class Workspace extends React.Component {
  constructor(props) {
    super(props);

    this.focus = this.focus.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillUnmount() {
    this.refs.editor.blur();
  }

  focus() {
    this.refs.editor.focus();
  }

  handleChange(content, delta, source, editor) {
    this.props.setContentState({editorState: content, title: this.props.editorState.title});
  }

  createNewTag(saveNoteContents) {
    hashHistory.push("/new-tag");
  }

  render() {
    return (
      <div className="workspace-container">
        <WorkspaceHeader editorState={ this.props.editorState }
          activeState={ this.props.activeState }
          notebooks={ this.props.notebooks }
          createNote={ this.props.createNote }
          defaultNotebook={ this.props.defaultNotebook }
          updateNote={ this.props.updateNote }
          moveNote={ this.props.moveNote }
          setContentState={ this.props.setContentState } />
        <div className="editor-container" onClick={ this.focus }>
          <ReactQuill
            theme="snow"
            placeholder="Start typing..."
            value={ this.props.editorState.editorState }
            ref="editor"
            onChange={ this.handleChange } >
          </ReactQuill>
        </div>
      </div>
    );
  }
}

export default Workspace;
