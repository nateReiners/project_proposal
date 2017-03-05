import Home from './home';
import { requestAllPhotos } from '../../actions/photos_actions';
import { requestAllUsers } from '../../actions/users_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  photos: state.photos,
  users: state.user
});

const mapDispatchToProps= dispatch => ({
  requestAllPhotos: () => dispatch(requestAllPhotos()),
  requestAllUsers: () => dispatch(requestAllUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
