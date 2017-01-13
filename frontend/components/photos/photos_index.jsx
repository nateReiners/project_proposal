import React, { Component } from 'react';
import PhotosIndexItem from './photos_index_item';
// import LoadingIcon from './loading_icon';

class PhotosIndex extends Component {
  componentDidMount() {
    this.props.requestAllPhotos();
  }

  render() {
    const { photos, loading, children } = this.props;
    return (
      loading ? <LoadingIcon /> :
      <section className="photos-index">
        <ul>
          {photos.map(photo => <PhotosIndexItem key={photo.id} photos={photo} />)}
        </ul>
        // {children}
      </section>
    );
  }
}

export default PhotosIndex;
