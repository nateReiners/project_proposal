import FollowButton from './follow_button';
import { createFollow, destroyFollow } from '../../actions/follows_actions';
import { requestSingleUser } from '../../actions/users_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  followed: state.user.followed,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    requestSingleUser: id => dispatch(requestSingleUser(id)),
    createFollow: follow => dispatch(createFollow(follow)),
    destroyFollow: id => dispatch(destroyFollow(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowButton);
