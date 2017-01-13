import { connect } from 'react-redux';
import PhotosIndex from './photos_index';
import { requestAllPhotos } from '../../actions/photos_actions';
import { selectAllPhotos } from '../../reducers/selectors';

const mapStateToProps = state => ({
  photos: selectAllPhotos(state),
});

const mapDispatchToProps = dispatch => ({
  requestAllPhotos: () => dispatch(requestAllPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosIndex);
