import React from 'react'
import {connect} from 'react-redux'
import PictureForm from '../../picture-form'
import * as pictureActions from '../../../action/picture-action'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      bio: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log("PROPS", this.props)
    // this.props.onComplete(this.state)
    // this.setState({
    //   bio: '',
    // })
  }

  render() {
    return (

      <div>
      <div>
        <h1>Profile</h1>
        <h2>Add or update an avatar image and bio</h2>
        <PictureForm onComplete={this.props.createPicture}/>
      </div>

      <form
        className="profile"
        onSubmit={this.handleSubmit}
        noValidate>
        
        <input
          type="text"
          name="bio"
          placeholder="bio"
          value={this.state.bio}
          onChange={this.handleChange}/>

        <button type="submit">Add bio</button>
      </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createPicture : picture => dispatch(pictureActions.createActionRequest(picture)),
  createProfile : profile => dispatch(profileActions.createActionRequest(profile))
})

export default connect(null, mapDispatchToProps)(Profile)
