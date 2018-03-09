

import React from 'react';

class GalleryImage extends React.Component {
  
  render() {
    return (
      <div className="gallery-image">
        <img className="uploaded-Img"src={this.props.picture.url}/>
        <p className="discription">  {this.props.picture.description}</p>
      </div>
    );
  }
}

export default GalleryImage;