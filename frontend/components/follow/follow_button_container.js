import FollowButton from './follow_button';
import { createFollow, destroyFollow } from '../../actions/follows_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  follower: state.session.currentUser,
  following: state.user
});

const mapDispatchToProps = (dispatch) => ({
    createFollow: follow => dispatch(createFollow(follow)),
    destroyFollow: id => dispatch(destroyFollow(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowButton);
