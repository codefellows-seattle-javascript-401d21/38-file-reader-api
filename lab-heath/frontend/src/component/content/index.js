import React from 'react';
import {connect} from 'react-redux';
import Nav from '../navbar/index';
import ProfileForm from '../profile-form/index';
import * as profileActions from '../../action/profile-actions';
import profile from '../../reducer/profile';

class Content extends React.Component {
  
  componentWillMount() {
    this.props.getMyProfile();
  }

  render() {
    return (
      <div>
        <Nav />
        <h1>WELCOME TO INSTAPIE 3.14!</h1>
        {/* <PictureForm onComplete={this.props.createPicture} /> */}
        <p> ---------------------------------------------</p>
        {/* <ProfileForm onComplete={this.props.createOwner}/> */}
        <h4> this is where the pictures are going to be at</h4>
      </div>
    );
  }
}

let mapStateToProps = state => {
  // console.log('this is map th state props',state.profile);
  return ({
    profile: state.profile,
  // users: state.users,
  });
};

const mapDispatchToProps = dispatch => ({
  createPicture : picture => dispatch(pictureActions.createActionRequest(picture)),
  getMyProfile : profile => dispatch(profileActions.getMeProfileRequest(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);