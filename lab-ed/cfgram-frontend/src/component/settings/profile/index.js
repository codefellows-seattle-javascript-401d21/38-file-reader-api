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
    this.props.onComplete(this.state)
    this.setState({
      bio: '',
    })
  }

  render() {
    return (

      <div>
      <div>
        <h1>Add an avatar</h1>
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
  createPicture : picture => dispatch(pictureActions.createActionRequest(picture))
})

export default connect(null, mapDispatchToProps)(Profile)

