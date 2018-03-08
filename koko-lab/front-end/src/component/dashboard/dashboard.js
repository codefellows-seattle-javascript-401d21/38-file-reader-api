import React from 'react';
import { connect } from 'react-redux';
import * as photoAction from '../../action/action-photos';
import PhotoForm from '../photo/photo-form/photo-form';

class Dashboard extends React.Component {
  render() { 
    return ( 
      <div>
        <h1>Hello, I am authorized to see this!</h1>
        <PhotoForm onComplete={this.props.createPic}/>
      </div>
    );
  }
}
let mapDispacthToProps = dispatch => ({
  createPic: photo => dispatch(photoAction.createActionRequest(photo)),
});
export default connect (null, mapDispacthToProps)(Dashboard);
