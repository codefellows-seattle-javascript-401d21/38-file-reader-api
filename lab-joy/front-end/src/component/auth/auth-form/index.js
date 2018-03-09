import React from 'react';
import { renderIf } from '../../../lib/utils';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      usernameError: null,
      emailError: null,
      passwordError: null,
      error: null,
      signInError: JSON.parse(localStorage.signInError),
      signUpError: JSON.parse(localStorage.signUpError),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({
      [name]: value.trim(),
      usernameError: name === 'username' && !value.trim() ? 'Username required' : null,
      emailError: name === 'email' && !value.trim() ? 'Email required' : null,
      passwordError: name === 'password' && !value.trim() ? 'Password required' : null,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { username, email, password } = this.state;
    this.props.onComplete({ username, email, password })
      .then(() => this.props.redirect('/content'))
      .catch(error => this.setState({ error }));

    this.setState({
      signInError: JSON.parse(localStorage.signInError),
      signUpError: JSON.parse(localStorage.signUpError),
    });
  }

  render() {
    return (
      <form
        className="auth-form"
        onSubmit={this.handleSubmit}
        noValidate>

        <input
          type="text"
          name="username"
          placeholder="username"
          pattern=""
          value={this.state.username}
          onChange={this.handleChange} />

        {renderIf(this.props.auth === 'signup',
          <input
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange} />
        )}

        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleChange} />

        <button type="submit">{this.props.auth}</button>

        <p>{renderIf(this.state.usernameError, <span className="tooltip">{this.state.usernameError}</span>)}</p>
        <p>{renderIf(this.state.passwordError, <span className="tooltip">{this.state.passwordError}</span>)}</p>
        <p>{renderIf(this.state.signInError, <span className="tooltip">Invalid password.</span>)}</p>
        <p>{renderIf(this.state.signUpError, <span className="tooltip">Username is already taken.</span>)}</p>
      </form>
    );
  }
}