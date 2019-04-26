import React from 'react';
import {tokenDelete} from '../../action/auth-actions';
import {connect} from 'react-redux';
import { pictureCreateRequest } from '../../action/picture-actions';
import PictureForm from '../picture-form';

class Dashboard extends React.Component {
  render () {
    return(
      <React.Fragment>
        <div>Welcome To The Dashboard</div>
        <button onClick={this.props.logout}>Signout</button>
        <PictureForm onComplete={this.props.createPicture} />
      </React.Fragment>
    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = dispatch => ({
  logout: () => dispatch(tokenDelete()),
  createPicture: picture => dispatch(pictureCreateRequest(picture)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);