import Home from './home';
import { requestAllPhotos } from '../../actions/photos_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  photos: state.photos
});

const mapDispatchToProps= dispatch => ({
  requestAllPhotos: () => dispatch(requestAllPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
