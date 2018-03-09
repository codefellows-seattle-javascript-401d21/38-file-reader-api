import React from 'react';
import {connect} from 'react-redux';
import PhotoForm from '../photo/photo-form';
import * as photoActions from '../../action/photo-actions';

class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>Photo Page</h1>
        <PhotoForm onComplete={this.props.createPhoto} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createPhoto: photo => dispatch(photoActions.createActionRequest(photo)),
});

export default connect(null, mapDispatchToProps)(Content);