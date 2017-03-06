import Home from './home';
import { requestAllPhotos } from '../../actions/photos_actions';
import { requestAllUsers } from '../../actions/users_actions';
import { connect } from 'react-redux';
import { createFollow } from '../../actions/follows_actions';

const mapStateToProps = (state) => ({
  photos: state.photos,
  users: state.user,
  currentUser: state.session.currentUser
});

const mapDispatchToProps= dispatch => ({
  requestAllPhotos: () => dispatch(requestAllPhotos()),
  requestAllUsers: () => dispatch(requestAllUsers()),
  createFollow: follow => dispatch(createFollow(follow))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
