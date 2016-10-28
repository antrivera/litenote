import React from 'react';
import { hashHistory } from 'react-router';

class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);

    this.createNotebook = this.createNotebook.bind(this);
    this.displayNotebook = this.displayNotebook.bind(this);
    this.deleteNotebook = this.deleteNotebook.bind(this);
    this.closeNotebookDrawer = this.closeNotebookDrawer.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllNotebooks();
  }

  componentDidMount() {
    document.addEventListener('click', this.closeNotebookDrawer, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeNotebookDrawer, false);
  }

  closeNotebookDrawer(e) {
    let notebookDrawer = document.getElementsByClassName('notebook-index-container')[0];
    if (this.props.className.includes("open")) {
      let notebookBtn = document.getElementById('notebook-btn');
      if (e.target !== notebookBtn && !notebookDrawer.contains(e.target)) {
        this.props.closeDrawer();
      }
    }
  }

  fetchNotebookContents(notebook) {
    this.props.fetchNotebook(notebook);
    this.props.displayNotebookContent(notebook);
  }

  displayNotebook(notebook) {
    this.props.closeDrawer();
    this.fetchNotebookContents(notebook);
  }

  deleteNotebook(notebook, event) {
    event.stopPropagation();
    this.props.deleteNotebook(notebook);
  }

  notebookTitles() {
    return this.props.notebooks.map((notebook, idx) => (
      <li key={notebook.title + idx}>
        <div className="notebook-list-item" onClick={this.displayNotebook.bind(null, notebook)}>
          <div id="notebook-index-item-info">
            <div className="notebook-title">
              {notebook.title}
            </div>
            <div className="notes-count">
              { `${notebook.note_count} ${notebook.note_count === 1 ? "note" : "notes"}` }
            </div>
          </div>
          { notebook.removable === true ? (
            <div className="notebook-item-btns">
              <button className="delete-btn sidebar-btn" onClick={ this.deleteNotebook.bind(null, notebook)}></button>
            </div>
          ) : null
        }
        </div>
      </li>
    ));
  }

  createNotebook() {
    hashHistory.push('/new-notebook');
  }

  render() {
    return (
      <div className={ this.props.className }>
        <div className="header-container">
          <h2>NOTEBOOKS</h2>
          <div className="new-icon" onClick={this.createNotebook}></div>
        </div>
        <ul className="sidemenu-index">
          {this.notebookTitles()}
        </ul>
      </div>
    );
  }
}

export default NotebookIndex;
