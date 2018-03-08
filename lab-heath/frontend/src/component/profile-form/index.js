import './_profile-form.scss';

import React from 'react';
import {connect} from 'react-redux';
import PictureForm from '../picture-form/index';
import * as pictureActions from '../../action/picture-actions';



class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.profile ? props.profile : {
      owner: this.props.ownerId,
      avatar: '',
      bio: '',

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({
      owner: this.props.ownerId,
      bio: '',
    });
  }


  render() {
    return (
      <form className='profile-form' onSubmit={this.handleSubmit}>
      
        <PictureForm onComplete={this.props.createPicture} />
        <input
          name='bio'
          placeholder={this.props.profile.bio}
          type='text'
          value={this.state.bio}
          onChange={this.handleChange}
        />

        <button type='submit'>Create/Update profile</button>
      </form>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);