import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../../lib/utils';
import * as profileActions from '../../../action/profile-actions';
import {Redirect} from 'react-router-dom';

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
      .catch(error => this.setState({error}));
  };

  render() {
    return (
      <React.Fragment>
        {localStorage.token ? <Redirect to="/content" /> : undefined}
        <form
          className="auth-form"
          onSubmit={this.handleSubmit}
          noValidate>

          <input className="auth"
            type="text"
            name="username"
            placeholder="Billy BoB"
            pattern=""
            value={this.state.username}
            onChange={this.handleChange}/>
          {renderIf(this.state.usernameError, <span className="tooltip">{this.state.usernameError}</span>)}

          {renderIf(this.props.auth === 'signup',
            <input className="auth"
              type="email"
              name="email"
              placeholder="IlovePie@yahoo.com"
              value={this.state.email}
              onChange={this.handleChange}/>
          )}

          <input className="auth"
            type="password"
            name="password"
            placeholder="your Secret Password"
            value={this.state.password}
            onChange={this.handleChange}/>

          <button className="enter" type="submit">{this.props.auth}</button>
        </form>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createProfile : profile => dispatch(profileActions.createProfileRequest(profile)),
});

export default connect(null, mapDispatchToProps)(AuthForm);