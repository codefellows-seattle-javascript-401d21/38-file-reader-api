import React from 'react';

const fileToDataURL = file => {
  return new Promise((resolve, reject) => {
    if (!file) return reject(new Error('File is required'));
    let reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result));
    reader.addEventListener('error', reject);
    return reader.readAsDataURL(file);
  });
};

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);

    this.emptyState = {
      preview: undefined,

      photo: '',
      photoDirty: false,
      photoError: 'Picture is required.',

      description: '',
      descriptionDirty: false,
      descriptionError: 'Description is required.',
    };

    this.state = this.emptyState;

    let memberFunctions = Object.getOwnPropertyNames(PhotoForm.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) this[functionName] = this[functionName].bind(this);
    }
  }

  handleValidate({type, value, files}) {
    let validateImageTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
    switch(type) {
    case 'file': {
      if (files.length !== 1) return 'You must select only one file';
      let imageType = files[0].type;
      if (!validateImageTypes.includes(imageType)) return 'The image must be a png, jpg, or gif.';
      return null;
    }
    case 'text':
      if (value.length < 10) return 'You must have at least 10 characters.';
      return null;
    default:
      return null;
    }
  }

  handleChange(e) {
    let {type, value, files} = e.target;
    if (type === 'file') {
      let error = this.handleValidate(e.target);
      if (!error) {
        fileToDataURL(files[0])
          .then(preview => this.setState(preview));
      }
      this.setState({
        photo: files[0],
        photoError: error,
        photoDirty: true,
      });
    }
    else {
      this.setState({
        description: value,
        descriptionError: this.handleValidate(e.target),
        descriptionDirty: true,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState(this.emptyState);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="photo-form">
        <img style={{width: '200px'}} src={this.state.preview} />

        <p>{this.state.photoError}</p>
        <label>Photo</label>

        <input type="file" name="photo" onChange={this.handleChange} />

        <p>{this.state.descriptionError}</p>
        <label>Description</label>

        <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />

        <button type="submit">upload photo</button>
      </form>
    );
  }
}

export default PhotoForm;