import React from 'react';
import {connect} from 'react-redux';
import PhotoForm from '../photo/photo-form';
import PhotoItem from '../photo/photo-item';
import * as photoActions from '../../action/photo-actions';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.fetchPhotos();
  }

  render() {
    return (
      <div>
        <h1>Photos</h1>
        <PhotoForm onComplete={this.props.createPhoto} buttonText="upload photo" />
        
        <h2>Gallery</h2>
        {
          this.props.photo.length > 0 ?
            this.props.photo.map(photo => <PhotoItem key={photo._id} photo={photo} buttonText="delete photo" />)
            :
            'No images'
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photo: state.photo,
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(photoActions.fetchAllRequest()),
  createPhoto: photo => dispatch(photoActions.createActionRequest(photo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);