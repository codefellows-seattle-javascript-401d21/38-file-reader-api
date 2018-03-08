import React from 'react';
import uuid from 'uuid-v4';

export default class Profile extends React.ReactComponent {
  constructor(props) {
    super(props);
    this.state = { 
      profileId: uuid, 
      bio: '',
      preview: undefined,
      image: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    console.log(this.props);
    this.setState({
      profileId: this.props.categoryId,
      bio: '',
      preview: undefined,
      image: '',
    });
  }

  render() { 
    return ( 
      <form
        onSubmit={this.handleSubmit}
        class-name="profile-form">
        <label>Bio</label>
        <input 
          type="text"
          name="bio"
          value={this.state.bio}
          onChange={this.handleChange}/>
        <img style={{width:'200px'}} src={this.state.preview} />
        <label>Image</label>
        <input 
          type="file" 
          name="image"/>
        <button
          type='submit'>
          create profile
        </button>

      </form>
    );
  }
}