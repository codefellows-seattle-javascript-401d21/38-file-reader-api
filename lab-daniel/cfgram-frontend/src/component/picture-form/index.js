import React from 'react';

const fileToDataUrl = (file) => {
  return new Promise((res, rej) => {
    if (!file) return rej(new Error('File is required.'));
    let reader = new FileReader();
    reader.addEventListener('load', () => res(reader.result));
    reader.addEventListener('error', rej);
    return reader.readAsDataURL(file);
  });
};

class PictureForm extends React.Component {
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
    Object.getOwnPropertyNames(PictureForm.prototype).filter(prop => prop.startsWith('handle')).map(name => this[name] = this[name].bind(this));
  }

  handleValidate({type, value, files}) {
    let validImgs = ['image/png', 'image/jpeg', 'image/jpg'];

    switch (type) {
    case 'file': {
      if (files.length !== 1) return 'Only one image allowed';
      let imageType = files[0].type;
      if (!validImgs.includes(imageType))
        return 'The format of this image is incorrect';
      return null;
    }
    case 'text': {
      if (value.length < 10)
        return 'You must have at least 10 characters';
      return null;
    }
    default: return null;
    }
  }

  handleChange(e) {
    let {type,value,files} = e.target;
    if (type === 'file') {
      let error = this.handleValidate(e.target);
      if(!error) {
        fileToDataUrl(files[0])
          .then(preview => this.setState({preview}));
      }
      this.setState({
        photo: files[0],
        photoError: error,
        photoDirty: true,
      });
    } else {
      this.setState({
        description: value,
        descriptionError: this.handleValidate(e.target),
        descriptionDirty: true,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let {photoDirty, descriptionDirty} = this.state;
    if (photoDirty || descriptionDirty) return null;
    this.props.onComplete(this.state);
    this.setState(this.emptyState);
  }

  render() {
    return(
      <form 
        onSubmit={this.handleSubmit}
        className='photo-form'>
        <img style={{width:'200px'}} src={this.state.preview} />

        <p>{this.state.photoError}</p>
        <label>Photo</label>
        <input
          type='file'
          name='photo'
          onChange={this.handleChange}/>
        
        <p>{this.state.descriptionError}</p>
        <label>Description</label>

        <input
          type='text'
          name='description'
          value={this.state.description}
          onChange={this.handleChange}/>

        <button type='submit'>Upload</button>
      </form>
    );
  }
}

export default PictureForm;