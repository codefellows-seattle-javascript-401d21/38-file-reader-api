import './_profile-item.scss';

import React from 'react';
import { connect } from 'react-redux';
import {renderIf} from '../../lib/utils';
import ProfileForm from '../profile-form';
// import * as routes from '../../routes';
import * as profileActions from '../../action/profile-actions';



class ProfileItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.profile ?
      this.props.profile :
      {
        Bio: '',
        avatar: '',
        updating: false,
      };

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(profile) {
    this.props.updateProfile(profile)
      .then(image => {
        let {bio, avatar} = image.payload;
        this.setState({updating: false, bio: bio, avatar: avatar});
      });
  
  }

  
  render() {
    return (
      <div>
        <div className={this.state.updating === true ? 'update' : 'profile-item'}>
          <img className="avatar" src={this.state.avatar} />
          <h2>Profile </h2>
          <h3>UserName: {this.props.profile.username}</h3>
          <h3>Email: {this.props.profile.email}</h3>
          <h3>Bio: {this.props.profile.bio}</h3>

          <button className="update" onClick={() => this.setState({updating: !this.state.updating})}>Update</button>

          <div className="updateform">
            {renderIf(this.state.updating === true,
              <ProfileForm 
                profile={this.props.profile}
                buttonText='update'
                onComplete={this.handleUpdate} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  picture: state.picture,
});

const mapDispatchToProps = dispatch => ({
  updateProfile: profile => dispatch(profileActions.updateProfileRequest(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileItem);