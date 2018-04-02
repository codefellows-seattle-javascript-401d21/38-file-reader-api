import './_landing.scss';

import React from 'react';
import {connect} from 'react-redux';
import Content from '../content/index';
import AuthForm from '../auth/auth-form';
import { renderIf } from '../../lib/utils';
import {signupRequest, signinRequest} from '../../action/auth-actions';


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect(path) {
    this.props.history.replace(path);
  }
  
  render() {
    console.log('__LANDING_PROPS__', this.props);
    let {params} = this.props.match;
    let onComplete = params.auth === 'signin'
      ? this.props.signin
      : this.props.signup;
    
  
    return (
      <div>
        <h1 className="logo">Welcome To InstaPie!</h1>
        <div className="landing-container">
          <AuthForm
            auth={params.auth}
            redirect={this.redirect}
            history={this.props.history}
            onComplete={onComplete}/>
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return ({
    profile: state.profile,
  });
};

let mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signupRequest(user)),
  signin: user => dispatch(signinRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
