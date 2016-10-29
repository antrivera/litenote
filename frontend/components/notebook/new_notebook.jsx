import React from 'react';
import { hashHistory } from 'react-router';

class NewNotebook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.title.length === 0) {
      return;
    }

    const notebook = {
      title: this.state.title.trim()
    }

    this.props.createNotebook({notebook});
    hashHistory.goBack();
  }

  update(field) {
    return e => {this.setState({title: e.currentTarget.value});};
  }

  cancel() {
    hashHistory.goBack();
  }

  render() {
    return (
      <div className="new-notebook-container">
        <div className="new-notebook-form-container">
          <div className="notebook-icon"></div>
          <h1 id="new-notebook-header">CREATE NOTEBOOK</h1>
          <form className="new-notebook-form" autoComplete="off" onSubmit={this.handleSubmit}>
            <label>
              <input type="text"
                id="new-notebook-input"
                value= {this.state.title}
                placeholder="Title your notebook"
                onChange={this.update("title")} />
            </label>
            <br />
          </form>

          <div className="new-notebook-form-btns">
            <button onClick={ this.cancel } className="cancel-btn">Cancel</button>
            <button id="new-notebook-submit-btn" onClick={ this.handleSubmit }>Create</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewNotebook;
