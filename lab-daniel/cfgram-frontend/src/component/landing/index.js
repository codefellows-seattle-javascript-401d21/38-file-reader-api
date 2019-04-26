import React from 'react';
import {connect} from 'react-redux';
import AuthForm from '../auth/auth-form';
import {signupRequest, signinRequest} from '../../action/auth-actions';

class Landing extends React.Component {
  constructor (props) {
    super(props);
    this.handleRoute = this.handleRoute.bind(this);
  }

  handleRoute (path) {
    this.props.history.replace(path);
  }

  render () {
    let {params} = this.props.match;
    let onComplete = params.auth === 'signin'
      ? this.props.signin
      : this.props.signup;

    return (
      <div className='landing-container'>
        <AuthForm 
          redirect={this.handleRoute}
          auth={params.auth}
          onComplete={onComplete}/>
      </div>
    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signupRequest(user)),
  signin: user => dispatch(signinRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);