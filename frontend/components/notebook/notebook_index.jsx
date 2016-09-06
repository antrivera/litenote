import React from 'react';
import { hashHistory } from 'react-router';

class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);

    this.createNotebook = this.createNotebook.bind(this);
    this.displayNotebook = this.displayNotebook.bind(this);
  }

  displayNotebook(notebook) {
    this.props.fetchNotebookContents(notebook);
  }

  notebookTitles() {
    return this.props.notebooks.map((notebook, idx) => (
      <li key={notebook.title + idx}>
        <div className="notebook-list-item" onClick={this.displayNotebook.bind(null, notebook)}>
          {notebook.title}
        </div>
      </li>
    ));
  }

  createNotebook() {
    hashHistory.push('/new-notebook');
  }

  render() {
    return (
      <div className="notebook-index-container">
        <div className="header-container">
          <h2>Notebooks</h2>
          <button onClick={this.createNotebook}>New Notebook</button>
        </div>
        <ul className="sidemenu-index">
          {this.notebookTitles()}
        </ul>
      </div>
    );
  }
}

export default NotebookIndex;
