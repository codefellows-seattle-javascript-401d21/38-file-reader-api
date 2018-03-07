import React from 'react'
import {connect} from 'react-redux'
import PictureForm from '../../component/picture-form'
import * as pictureActions from '../../action/picture-action'

class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the photo app</h1>
        <PictureForm onComplete={this.props.createPicture}/>
        {/* <p>{this.props.token}</p> */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createPicture : picture => dispatch(pictureActions.createAction(picture))
})

export default connect(null, mapDispatchToProps)(Content)
