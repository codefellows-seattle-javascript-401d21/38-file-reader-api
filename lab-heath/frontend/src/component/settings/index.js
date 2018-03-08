import React from 'react';
import {connect} from 'react-redux';
import Nav from '../navbar/index';
import ProfileForm from '../profile-form/index';
import ProfileItem from '../profile-item/index';

import * as profileActions from '../../action/profile-actions';

class Settings extends React.Component {



  render() {
    return (
      <div>
        <Nav />
        <h1>Profile Settings</h1>
        <p> ---------------------------------------------</p>      
        {!(this.props.profile instanceof Array) ?
          (<div key={this.props.profile._id}>
            <ProfileItem profile={this.props.profile}/>
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
  // users: state.users,
  });
};

const mapDispatchToProps = dispatch => ({
  createPicture : picture => dispatch(pictureActions.createActionRequest(picture)),
  createProfile : profile => dispatch(profileActions.createProfileRequest(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);