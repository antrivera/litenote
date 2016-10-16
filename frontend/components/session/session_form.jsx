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
    let user = this.state;

    if (this.props.formType === 'signup') {
      user = {
        email: user.username,
        password: user.password
      }
    }

    this.props.processForm({user})
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
    let submitButtonVal = (this.props.formType === 'login') ? 'Log in' : 'Sign Up';
    return (
      <div className="login-form-container">
        <div className="session-title">{submitButtonVal}</div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          <div className="login-form">

            <br />
            <label>
              <input type="text"
                     className="session-input-field"
                     placeholder="Username"
                     value= {this.state.username}
                     onChange={this.update("username")} />
            </label>

            <br />
            <label>
              <input type="password"
                     className="session-input-field"
                     placeholder="Password"
                     value= {this.state.password}
                     onChange={this.update("password")} />
            </label>

            <br />
            <input type="submit" className="submit-btn" value={submitButtonVal} />

          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
