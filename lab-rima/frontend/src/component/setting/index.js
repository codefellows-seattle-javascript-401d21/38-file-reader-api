import React from 'react';
import {connect} from 'react-redux';
import PictureForm from '../picture-form/index';
import * as pictureActions from '../../action/picture-actions';

class Setting extends React.Component {
  render(){
    return (
      <div>
        <h1>You are logged in!</h1>
        <h3>Create your profile</h3>
        <PictureForm onComplete={this.props.createPicture} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createPicture : picture => dispatch(pictureActions.createActionRequest(picture)),
});

export default connect(null, mapDispatchToProps)(Setting);
