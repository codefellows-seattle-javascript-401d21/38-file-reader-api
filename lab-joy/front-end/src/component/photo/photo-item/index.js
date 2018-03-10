import React from 'react';
import { connect } from 'react-redux';
import { renderIf } from '../../../lib/utils';
import PhotoForm from '../photo-form';
import { deleteActionRequest } from '../../../action/photo-actions';

class PhotoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.photo ?
      this.props.photo :
      {
        url: '',
        description: '',
        owner: '',
        profile: '',
        comments: '',
      };

    let memberFunctions = Object.getOwnPropertyNames(PhotoItem.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.photoDelete(this.state);
  }

  render() {
    return (
      <span className="photo-item" key={this.props.photo._id} onDoubleClick={this.handleDelete}>
        <img className="gallery-image" src={this.props.photo.url} />
      </span>
    );
  }
}

const mapStateToProps = state => ({
  photo: state.photo,
});

const mapDispatchToProps = (dispatch, getState) => ({
  photoDelete: photo => dispatch(deleteActionRequest(photo)),
});

export default connect(null, mapDispatchToProps)(PhotoItem);