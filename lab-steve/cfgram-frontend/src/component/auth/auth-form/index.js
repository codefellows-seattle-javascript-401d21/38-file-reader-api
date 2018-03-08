import React from 'react';
import {renderIf} from '../../../lib/utils';

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
    };

    Object.getOwnPropertyNames(AuthForm.prototype)
      .filter(prop => prop.startsWith('handle'))
      .map(prop => this[prop] = this[prop].bind(this));
  }

  handleChange(e) {
    let {name, value} = e.target;
    this.setState({
      [name]: value,
      usernameError: name === 'username' && !value ? 'Username required' : null,
      emailError: name === 'email' && !value ? 'Email required' : null,
      passwordError: name === 'password' && !value ? 'Password required' : null,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    // pull the form data from the state
    const {username, email, password} = this.state;
    this.props.onComplete({
      username: username.trim(),
      email: email.trim(),
      password: password.trim()
    })
      .then(() => this.setState({ username: '', email: '', password: '' }))
      .catch(error => this.setState({error}));
  }

  render() {
    return (
      <form
        className='auth-form'
        onSubmit={this.handleSubmit}
        noValidate>

        <input
          type='text'
          name='username'
          placeholder='johnsmith1985'
          value={this.state.username}
          onChange={this.handleChange}
        />
        {renderIf(this.state.usernameError,
          <span className="tooltip">
            {this.state.usernameError}
          </span>
        )}

        {renderIf(this.props.auth === 'signup',
          <input
            type="email"
            name="email"
            placeholder="john.smith@example.com"
            value={this.state.email}
            onChange={this.handleChange}/>
        )}

        <input
          type="password"
          name="password"
          placeholder="johnsmithrocksthehouse"
          value={this.state.password}
          onChange={this.handleChange}/>

        <button type="submit">{this.props.auth}</button>
      </form>
    );
  }
}
