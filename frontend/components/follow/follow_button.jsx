import React from 'react';
import {Link} from 'react-router';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFollow = this.toggleFollow.bind(this);
  }


  toggleFollow() {
    let follow = {follower_id: this.props.follower.id, following_id: this.props.following.id};
    this.props.createFollow(follow);
  }

  follow(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Link onClick={this.toggleFollow} className="follow-link">
        <div className="follow-icon">Follow!</div>
      </Link>
    );
  }
}


export default FollowButton;
