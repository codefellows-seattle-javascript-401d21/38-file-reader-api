import './_profile-form.scss';

import React from 'react';
import {connect} from 'react-redux';
import PictureForm from '../picture-form/index';
// import * as pictureActions from '../../action/picture-actions';


const fileToDataURL = file => {
  return new Promise((resolve,reject) => {
    if(!file)
      return reject(new Error('File is required'));

    let reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result));
    reader.addEventListener('error',reject);

    return reader.readAsDataURL(file);
  });
};


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
    if(e.target.type !== 'file') {
      return this.setState({[e.target.name]: e.target.value});
    }
  
    fileToDataURL(e.target.files[0])
      .then(avatar_preview => this.setState({avatar_preview}))
      .catch(console.error);
    this.setState({file: e.target.files[0]});
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

        <img style={{width:'100px'}} src={this.state.preview} />

        <p>{this.state.photoError}</p>
        <label>Photo</label>

        <input
          type='file' 
          name='photo'
          onChange={this.handleChange}
        />

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