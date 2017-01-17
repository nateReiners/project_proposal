import React from 'react';
import { Link } from 'react-router';

const PhotosIndexItem = ({ photo, router }) => (
  <li key={photo.id} className="photos-index-item">
    <Link to={`/photos/${photo.id}`}>
        <img src={photo.img_url} alt={photo.title} />
    </Link>
    <Link to={`/users/${photo.author_id}`} className="author_id">
      <h3>Photographer: {photo.author}</h3>
    </Link>
    <h3 className="title">Title: {photo.title}</h3>
  </li>
);

export default PhotosIndexItem;
