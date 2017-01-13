import React from 'react';

import LoggedInNav from '../main_nav/logged-in_nav';
import PhotosIndexContainer from '../photos/photos_index_container';
const Profile = () => {
  return (
    <div className="profile-div">
      <LoggedInNav />
      This is the Profile component!
      <div className="profile-photos-div">
        <PhotosIndexContainer />
      </div>
    </div>
  );
};

export default Profile;
