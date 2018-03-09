import './_content.scss';

import React from 'react';
import Nav from '../navbar/index';
import {connect} from 'react-redux';
import profile from '../../reducer/profile';
import PictureForm from '../picture-form/index';
import GalleryProfile from '../gallery-profile/index';
import GalleryImage from '../galleryImage/index';
import * as pictureActions from '../../action/picture-actions';
import * as profileActions from '../../action/profile-actions';

class Content extends React.Component {
  
  componentWillMount() {
    this.props.getMyProfile();
    if(this.props.picture.length === 0){
      this.props.getMyPicture();
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <h1>WELCOME TO INSTAPIE 3.14!</h1>
        <p className="bar"> ---------------------------------------------</p>
        <button className="logout" onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}> Signout</button>
        <div className="profile-Upload">
          <GalleryProfile profile={this.props.profile}/>
          <PictureForm onComplete={this.props.createPicture}/>
        </div>
        <div className="clearFloat"/>

        {this.props.picture ?
          this.props.picture.map(owner =>
            <div className="images" key={owner._id}>
              <GalleryImage picture={owner}/>
            </div>)
          :
          undefined
        }

      </div>
    );
  }
}

let mapStateToProps = state => {
  return ({
    profile: state.profile,
    picture: state.picture,
  });
};

const mapDispatchToProps = dispatch => ({
  createPicture : picture => dispatch(pictureActions.createActionRequest(picture)),
  getMyPicture : picture => dispatch(pictureActions.getActionRequest(picture)),
  getMyProfile : profile => dispatch(profileActions.getMeProfileRequest(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);