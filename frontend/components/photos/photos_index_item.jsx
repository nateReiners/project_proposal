import React from 'react';
import { Link } from 'react-router';
import FollowButtonContainer from '../follow/follow_button_container';

const PhotosIndexItem = ({ photo, router }) => {

  return (
    <li key={photo.id} className="photos-index-item">
      <Link to={`/photos/${photo.id}`}>
          <img src={photo.img_url} alt={photo.title} />
      </Link>
      <div className="img-name-title">
        <Link to={`/users/${photo.author_id}`} className="img-and-name">
          <div className="img">
            <img src={photo.author_url}></img>
          </div>
          <div className="name">
            <h3>{photo.author_name}</h3>
          </div>
        </Link>
        <div className="title">
          <p>{photo.title}</p>
        </div>
      </div>
    </li>
  );
}

export default PhotosIndexItem;
