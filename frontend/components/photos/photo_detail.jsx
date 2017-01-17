import React from 'react';
import LoggedInNav from '../main_nav/logged-in_nav';

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
                <li>Title: {photo.title}</li>
                <li>Author Id: {photo.author_id}</li>
              </ul>
              <div className="comments">
                <h2>Comments</h2>
                <ul>
                  <li>1 great pic</li>
                  <li>2 amazing quality </li>
                  <li>3 best pic ever</li>
                </ul>
              </div>
            </div>
          </figure>
        </section>
      </div>
    );
  }
}

export default PhotoDetail;
