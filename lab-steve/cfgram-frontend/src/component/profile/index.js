import React from 'react';
import {tokenDelete} from '../../action/auth-actions';
import {connect} from 'react-redux';

class Profile extends React.Component {
  render() {
    return (
      <div className='profile-container'>
        <h1>User Profile</h1>
        <button type='button' onClick={this.props.signout}>Signout</button>
      </div>
    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = dispatch => ({
  // no payload necessary to delete the token
  signout: () => dispatch(tokenDelete()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
