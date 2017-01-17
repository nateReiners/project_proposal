import React from 'react';

import LoggedInNav from '../main_nav/logged-in_nav';
import PhotosIndexContainer from '../photos/photos_index_container';

const Profile = () => {
  return (
    <div className="profile-div">
      <LoggedInNav />
      <div className="cover-photo">
      </div>
      <div className="profile-info">
      </div>
      This is the Profile component!
      <div className="profile-photos">
        <PhotosIndexContainer />
      </div>
    </div>
  );
};

export default Profile;
