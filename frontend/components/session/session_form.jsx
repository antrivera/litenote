import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {this.setState({[field]: e.currentTarget.value});};
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      hashHistory.push("/home");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map( (error, idx) => (
          <li key={`error-${idx}`}>
            {error.responseText}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          <div className="login-form">

            <br />
            <label> Username:
              <input type="text"
                     value= {this.state.username}
                     onChange={this.update("username")} />
            </label>

            <br />
            <label> Password:
              <input type="password"
                     value= {this.state.password}
                     onChange={this.update("password")} />
            </label>

            <br />
            <input type="submit" value="Submit" />

          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
