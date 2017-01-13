import React from 'react';
import { Link } from 'react-router';

const PhotosIndexItem = ({ photo, router }) => (
  <li key={photo.id} className="photos-index-item">
    <Link to={`/photos/${photo.id}`}>
      <span>{photo.title}</span>
      <div className="feed-img">
        <img src={photo.img_url} alt={photo.title} />
      </div>
    </Link>
  </li>
);

export default PhotosIndexItem;
