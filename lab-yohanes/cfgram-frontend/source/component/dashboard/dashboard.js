import React from 'react';
import {connect} from 'react-redux'; //create pictures
import PictureFrom from'../picture-form/picture-form';
import * as pictureActions from '../../action/picture-actions'; //


 class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Authorization SUCCESS!</h1>
        <PictureFrom onComplete={this.props.createPicture}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createPicture : picture => dispatch(pictureActions.createActionRequest(picture)),
});

export default connect(null, mapDispatchToProps)(Dashboard)