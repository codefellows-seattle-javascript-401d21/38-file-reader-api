import React from 'react';
import {connect} from 'react-redux';
import PictureForm from '../picture-form/index';
import * as profileActions from '../../action/profile-actions';

class Setting extends React.Component {
  render(){
    return (
      <div>
        <h1>You are logged in!</h1>
        <h3>Create your profile</h3>
        <PictureForm onComplete={this.props.createProfile} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createProfile : picture => dispatch(profileActions.createActionRequest(picture)),
});

export default connect(null, mapDispatchToProps)(Setting);
