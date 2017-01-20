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
        <section className="photo-detail">
          <h1 className="title">"{photo.title}" by {photo.author_name}</h1>
          <figure>
            <img src={photo.img_url} alt={photo.title} />
            <div className="side-div">
              <Link to={`/users/${photo.author_id}`} className="photographer_link">
                <h3>Visit {photo.author_name}'s Profile</h3>
              </Link>
              <Link to="/home" className="back-link">Back to Home</Link>
            </div>
          </figure>
        </section>
      </div>
    );
  }
}

export default PhotoDetail;
