import React from 'react';
import { hashHistory } from 'react-router';

class NewNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      notebook: this.props.activeState.currentNotebook
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = {
      title: this.state.title,
      notebook_id: this.state.notebook.id
    }

    this.props.createNote({note});
    hashHistory.goBack();
  }

  update(field) {
    console.log(this.state.title);
    return e => {this.setState({title: e.currentTarget.value});};
  }

  cancel() {
    hashHistory.push('/home');
  }

  render() {
    return (
      <div className="new-notebook-form-container">
        <h1>NEW NOTE</h1>
        <h3>{this.state.notebook.title}</h3>
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

export default NewNote;
