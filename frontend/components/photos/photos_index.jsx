import React, { Component } from 'react';
import PhotosIndexItem from './photos_index_item';

class PhotosIndex extends Component {
  componentDidMount() {
    this.props.requestAllPhotos();
  }

  render() {
    const photos = this.props.photos;
    return (
      <section className="photos-index">
        <ul>
          {photos.map((photo, i) => <PhotosIndexItem key={i} photo={photo} />)}
        </ul>
      </section>
    );
  }
}

export default PhotosIndex;
