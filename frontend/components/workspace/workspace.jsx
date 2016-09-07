import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

class Workspace extends React.Component {
  constructor(props) {
    super(props);
    this.username = this.props.currentUser.username;

    this.state = {editorState: EditorState.createEmpty()};
    this.focus = () => this.refs.editor.focus();
    this.onChange = editorState => {
      console.log({editorState});
      this.setState({editorState});
    }
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.toggleInlineStyle = style => this._toggleInlineStyle(style);
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className="workspace-container">
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
