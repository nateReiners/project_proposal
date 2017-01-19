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
        <LoggedInNav />
        <section className="photo-detail">
          <figure>
            <img src={photo.img_url} alt={photo.title} />
            <div className="side-div">
              <ul>
                <li className="title">{photo.title}</li>

                <Link to={`/users/${photo.author_id}`} className="photographer_link">
                <li>
                    <h3>By {photo.author_name}</h3>
                </li>
              </Link>
              </ul>
            </div>
          </figure>
        </section>
      </div>
    );
  }
}

export default PhotoDetail;
