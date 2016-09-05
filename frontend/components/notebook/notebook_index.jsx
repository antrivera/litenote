import React from 'react';
import { hashHistory } from 'react-router';

class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);

    this.createNotebook = this.createNotebook.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    console.log('click');
  }

  notebookTitles() {
    return this.props.notebooks.map((notebook, idx) => (
      <li key={notebook.title + idx}>
        <div className="notebook-list-item" onClick={this.clickHandler}>
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
      <div>
        <div className="header-container">
          <h2>Notebook Header</h2>
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