import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';



class UserItem extends React.Component {
  constructor(props) {
    super(props);
    this.makeFollow = this.makeFollow.bind(this);
  };

  makeFollow() {
    createFollow(
      { follower_id: this.props.currentUser.id,
        following_id: this.props.user.id }
    );
  }

  render() {
    return (
      <li key={this.props.user.id} className="user-item">
        <h1>Follow {this.props.user.first_name}</h1>
        <Link onClick={this.makeFollow} className="img-and-name">
          <div className="img">
            <img src={this.props.user.profile_img_url}></img>
          </div>
          <div className="name">
            <h3>{this.props.user.first_name} {this.props.user.last_name}</h3>
          </div>
        </Link>
      </li>
    );
  }
};

export default UserItem;
