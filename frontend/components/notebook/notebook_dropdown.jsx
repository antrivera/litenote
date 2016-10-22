import React from 'react';

class NotebookDropdown extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      dropDownDisplay: "closed"
    };

    this.toggleDropDownDisplay = this.toggleDropDownDisplay.bind(this);
  }

  toggleDropDownDisplay() {
    let display = this.state.dropDownDisplay === "closed" ? "open" : "closed";
    this.setState({dropDownDisplay: display});
  }

  notebookTitles() {
    return this.props.notebooks.map( notebook => (
      <li className="notebook-dropdown-item" key={notebook.title + notebook.id}>{notebook.title}</li>
    ));
  }

  render() {
    return (
      <div className="notebook-select">
        <div className="current-notebook" title="Move note" onClick={this.toggleDropDownDisplay}>
          <div className="notebook-icon"></div>
          <span id="current-notebook-title">
            {this.props.activeNote ? this.props.activeNote.notebook_title :
              this.props.currentNotebook.title}
          </span>
          <div className="dropdown-icon"></div>
        </div>
        <div className={`notebook-dropdown ${this.state.dropDownDisplay}` }>
          <ul>
            <li className="notebook-dropdown-item create-new-notebook">
              <span className="dropdown-header">+ CREATE NEW NOTEBOOK</span>
            </li>
            { this.notebookTitles() }
          </ul>
        </div>
      </div>
    );
  }
}

export default NotebookDropdown;
