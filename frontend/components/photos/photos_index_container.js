import { connect } from 'react-redux';
import PhotosIndex from './photos_index';
import { requestAllPhotos } from '../../actions/photos_actions';
import { selectAllPhotos } from '../../reducers/selectors';
import { Router } from 'react-router';

const mapStateToProps = state => ({
  photos: selectAllPhotos(state),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllPhotos: () => dispatch(requestAllPhotos())
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosIndex);
