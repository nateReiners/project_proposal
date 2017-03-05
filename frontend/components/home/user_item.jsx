import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import FollowButtonContainer from '../follow/follow_button_container';

const UserItem = ({ user }) => {
  return (
    <li key={user.id} className="user-item">
        <Link to={`/users/${user.id}`} className="img-and-name">
          <div className="img">
            <img src={user.profile_img_url}></img>
          </div>
          <div className="name">
            <h3>{user.first_name} {user.last_name}</h3>
          </div>
        </Link>
    </li>
  );
};

export default UserItem;
