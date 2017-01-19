import React from 'react';
import {Link} from 'react-router';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFollow = this.toggleFollow.bind(this);

  }

  toggleFollow() {
    if (this.props.followed) {
      this.props.destroyFollow(this.props.user.id);
    } else {
      this.props.createFollow(
        {follower_id: this.props.currentUser.id,
          following_id: this.props.user.id}
      );
    }

  }

  follow(e) {
    e.preventDefault();
  }

  render() {
    let buttonText;
    if (this.props.followed) {
      buttonText = "Unfollow";
    } else {
      buttonText = "Follow";
    }

    return (
      <button onClick={this.toggleFollow} className="follow-button">
        {buttonText}
      </button>
    );
  }
}


export default FollowButton;
