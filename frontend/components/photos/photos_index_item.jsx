import React from 'react';
import { Link } from 'react-router';

const PhotosIndexItem = ({ photos, router }) => (
  <li className="photos-index-item">
    <Link to={`/photos/${photos.id}`}>
      <span>{photos.id}</span>
      <img src={photos.image_url} alt={photos.name} />
      <span>{photos.name}</span>
    </Link>
  </li>
);

export default PhotosIndexItem;
