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
        avatar: '' || this.props.picture[0].url,
        updating: false,
      };

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(profile) {
    this.props.updateProfile(profile);
    this.setState({updating: false});
  }

  
  render() {
    console.log('this is the image', this.props.picture[0]);
    console.log('this is the state', this.state);
    return (
      <div>
        <div className={this.state.updating === true ? 'update' : 'profile-item'} onDoubleClick={() => this.setState({updating: !this.state.updating})}>
          <h1>Profile </h1>
          <h3>UserName: {this.props.profile.username}</h3>
          <h3>Email: {this.props.profile.email}</h3>
          <h3>Bio: {this.props.profile.bio}</h3>
          <h3>photo: <img src={this.state.avatar} /></h3>

       
        </div>
        {renderIf(this.state.updating === true,
          <ProfileForm 
            profile={this.props.profile}
            buttonText='update'
            onComplete={this.handleUpdate} />
        )}

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