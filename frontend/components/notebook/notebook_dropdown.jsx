import React from 'react';
import NotebookDropdownItem from './notebook_dropdown_item';

class NotebookDropdown extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      dropDownDisplay: "closed"
    };

    this.toggleDropDownDisplay = this.toggleDropDownDisplay.bind(this);
  }

  toggleDropDownDisplay() {
    if (!this.props.activeNote) {
      return;
    }

    let display = this.state.dropDownDisplay === "closed" ? "open" : "closed";
    this.setState({dropDownDisplay: display});
  }

  notebookTitles() {
    return this.props.notebooks.map( notebook => (
      <NotebookDropdownItem key={notebook.title + notebook.id}
        updateNote={ this.props.updateNote }
        activeNote={ this.props.activeNote }
        moveNote={ this.props.moveNote }
        notebook={ notebook } />
    ));
  }

  currentNotebookTitle() {
    if (this.props.activeNote) {
      return this.props.activeNote.notebook_title;
    } else if (this.props.currentNotebook.id) {
      return this.props.currentNotebook.title;
    } else {
      return this.props.defaultNotebook.title;
    }
  }

  render() {
    return (
      <div className="notebook-select">
        <div className="current-notebook" title="Move note" onClick={this.toggleDropDownDisplay}>
          <div className="notebook-icon"></div>
          <span id="current-notebook-title">
            { this.currentNotebookTitle() }
          </span>
          <div className="dropdown-icon"></div>
        </div>
        <div className={`notebook-dropdown ${this.state.dropDownDisplay}` }>
          <ul>
            <li className="notebook-dropdown-item create-new-notebook">
              <div className="move-note-icon"></div>
              <span className="dropdown-header">MOVE NOTE</span>
            </li>
            { this.notebookTitles() }
          </ul>
        </div>
      </div>
    );
  }
}

export default NotebookDropdown;
