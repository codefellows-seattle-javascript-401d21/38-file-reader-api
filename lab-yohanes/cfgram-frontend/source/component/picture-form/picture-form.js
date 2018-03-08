import React from 'react';

const fileToDataURL = file => {
  return new Promise((resolve, reject) => {
    if (!file)
      return reject(new Error('File Required'));

    let reader = new FileReader(); //read docs for this portion. No secret to this magic
    reader.addEventListener('load', () => resolve(reader.result));
    reader.addEventListener('error', reject);

    return reader.readAsDataURL(file);
  });
};

class PictureForm extends React.Component {
  constructor(props) {
    super(props)

    this.emptyState = {
      preview: undefined, //allows the user to preview the selected image prior to upload

      photo: '', //file path
      photoDirty: false, //I think this prevents the user from uploading the same picture twice
      photoError: 'Image Required', //validation

      description: '',
      descriptionDirty: false,
      descriptionError: 'Must Select An Image',
    };

    this.state = this.emptyState;
    //turns all functions that start with 'handle' to .bind(this)
    let memberFunctions = Object.getOwnPropertyNames(PictureForm.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  //member Functions
  handleValidate({ type, value, files }) { //the function above automatically does a .bind(this) to this function
    let validateImageTypes = ['image/png', 'image/jpeg', 'image/jpg'];

    switch (type) {
      case 'file':
        if (files.length !== 1) //MODIFIED: if the user try to upload more than one picture at a time
          return 'Please Upload One File At A Time'

        let imageType = files[0].type; //makes sure it is an image type within our stored array (jpg, png, etc.)

        if (!validateImageTypes.includes(imageType))
          return 'Image Must Be a .png or .jpg file'; //modified from original demo

        return null;
      case 'text':
        if (value.length < 5)
          return 'You Must Have At Least 5 Characters';
        return null;
      default:
        return null;
    }
  }

  handleChange(event) {
    let {type, value, files} = event.target;

    if (type === 'file') {
      let error = this.handleValidate(event.target); //validates all event listeners before post
      if (!error) {
        fileToDataURL(files[0])
          .then(preview => this.setState({preview})); //updates the state of "preview" which is bound to the  DOM
    }

      this.setState({
        photo: files[0],
        photoError: error,
        photoDirty: true,
      });
    } else {
      this.setState({
        description: value,
        descriptionError: this.handleValidate(event.target),
        descriptionDirty: true,
      });
    }
  }
  handleSubmit(event) { //our image tag renders the image preview to state at a specific size
    event.preventDefault();
    //TODO: if theres an error don't call onComplete
    this.props.onComplete(this.state);
    this.setState(this.emptyState);
  }

// Life-Cycle hooks
  render() {
    return ( //modified img with from 200px to 400px because of size errors. need to add compile function to shrink image
      <form onSubmit={this.handleSubmit}
        className="photo-form">

        <img style={{ width: '400px' }} src={this.state.preview} />

        <p>{this.state.photoError}</p>
        <label>Photo</label>

        <input
          type="file"
          name="photo"
          onChange={this.handleChange}
        />

        <p>{this.state.descriptionError}</p>
        <label>Description</label>

        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />

        <button
          type="submit">
          Upload Photo
        </button>
      </form>
    )
  }
}
 export default PictureForm;
