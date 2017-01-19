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
      <button onClick={this.toggleFollow} className="follow-button">
        <div className="follow-icon">Follow!</div>
      </button>
    );
  }
}


export default FollowButton;
