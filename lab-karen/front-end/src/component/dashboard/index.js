import React from 'react'
import {connect} from 'react-redux';
import PictureForm from '../picture-form';
import * as pictureActions from '../../action/picture-actions';

class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard-container'>
        <h1>CFGram Photo Uploader</h1>
        <PictureForm onComplete={this.props.createPicture} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createPicture : picture => dispatch(pictureActions.createActionRequest(picture)),
});

export default connect(null,mapDispatchToProps)(Dashboard);
