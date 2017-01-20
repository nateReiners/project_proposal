import React from 'react';
import LoggedInNav from '../main_nav/logged-in_nav';
import { Link } from 'react-router';

class PhotoDetail extends React.Component {

  componentDidMount() {
    this.props.requestAllPhotos();
  }

  render () {
    const photo = this.props.photo;

    return (
      <div className="photo-detail-main">
        <div className="photo-detail">
          <ul className="title-and-links">
            <li>
              <Link to={`/users/${photo.author_id}`} className="photographer_link">
                <h3>Photographer Profile</h3>
              </Link>
            </li>
            <li>
              <Link to="/home" className="back-link">Back to Home</Link>
            </li>
          </ul>
            <img src={photo.img_url} alt={photo.title} />
            <h1 className="title">"{photo.title}" by {photo.author_name}</h1>
        </div>
      </div>
    );
  }
}

export default PhotoDetail;
