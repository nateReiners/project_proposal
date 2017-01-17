import React, { Component } from 'react';
import PhotosIndexItem from './photos_index_item';
import { Router, hashHistory, Link, withRouter } from 'react-router';

class PhotosIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] };
  }

  componentDidMount() {
    this.props.requestAllPhotos();
  }

  profilePhotos() {
    const profilePhotos = [];
    this.props.photos.forEach(photo => {
      if (photo.author_id === currentUser.id) {
        profilePhotos.push(photo);
      }
    })
    return profilePhotos;
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
