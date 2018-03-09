import './_galleryProfile.scss';

import React from 'react';

class GalleryProfile extends React.Component {
  
  render() {
    return (
      <div className="gallery-profile">
        <h3 className="avatar"><img className="galleryImage"src={this.props.profile.avatar} /></h3>
        <h3>{this.props.profile.username}</h3>
        <h4>{this.props.profile.bio}</h4>
      </div>
    );
  }
}

export default GalleryProfile;