import React from 'react';
import { Link } from 'react-router';

const PhotosIndexItem = ({ photo, router }) => (
  <li key={photo.id} className="photos-index-item">
    <Link to={`/users/${photo.author_id}`} className="author_id">
      <h3>Photographer ID: {photo.author_id}</h3>
    </Link>
    <Link to={`/photos/${photo.id}`}>
        <img src={photo.img_url} alt={photo.title} />
        <h3>Title: {photo.title}</h3>
    </Link>
  </li>
);

export default PhotosIndexItem;
