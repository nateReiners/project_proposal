import React from 'react';
import { Link } from 'react-router';
import FollowButtonContainer from '../follow/follow_button_container';

const PhotosIndexItem = ({ photo, router }) => {

  return (
    <li key={photo.id} className="photos-index-item">
      <Link to={`/photos/${photo.id}`}>
          <img src={photo.img_url} alt={photo.title} />
      </Link>
      <Link to={`/users/${photo.author_id}`} className="author_id">
        <div className="author_img">
          <img src={photo.author_url}></img>
        </div>
        <h3 className="author_name">{photo.author_name}</h3>
      </Link>
      <h3 className="title">Title: {photo.title}</h3>
    </li>
  );
}

export default PhotosIndexItem;
