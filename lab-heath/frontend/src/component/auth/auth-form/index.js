import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../../lib/utils';
import * as profileActions from '../../../action/profile-actions';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      username: '',
      email: '',
      password: '',
      usernameError: null,
      emailError: null,
      passwordError: null,
      error: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;
    this.setState({
      [name]: value.trim(),
      usernameError: name === 'username' && !value.trim() ? 'Username required' : null,
      emailError: name === 'email' && !value.trim() ? 'Email required' : null,
      passwordError: name === 'password' && !value.trim() ? 'Password required' : null,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let {username, email, password} = this.state;
    this.props.onComplete({username, email, password})
      .then(() => this.setState({username: '', email: '', password: ''}))
      .then(() => this.props.createProfile({bio: '', avatar: ''}))
      .then(() => this.props.redirect('/content'))
      .catch(error => this.setState({error}));
  };

  render() {
    return (
      <form
        className="auth-form"
        onSubmit={this.handleSubmit}
        noValidate>

        <input
          type="text"
          name="username"
          placeholder="johnsmith1985"
          pattern=""
          value={this.state.username}
          onChange={this.handleChange}/>
        {renderIf(this.state.usernameError, <span className="tooltip">{this.state.usernameError}</span>)}

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

const mapDispatchToProps = dispatch => ({
  createProfile : profile => dispatch(profileActions.createProfileRequest(profile)),
});

export default connect(null, mapDispatchToProps)(AuthForm);