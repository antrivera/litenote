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
    const notebook = {
      title: this.state.title
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
      <div className="new-notebook-form-container">
        <h1>CREATE NOTEBOOK</h1>
        <form className="new-notebook-form">
          <label> Title:
            <input type="text"
              value= {this.state.title}
              onChange={this.update("title")} />
          </label>
          <br />
        </form>

        <div className="new-notebook-form-btns">
          <button onClick={ this.cancel } className="cancel-btn">Cancel</button>
          <button onClick={ this.handleSubmit }>Create</button>
        </div>
      </div>
    );
  }
}

export default NewNotebook;
