import { connect } from 'react-redux';
import PhotosIndex from './photos_index';
import { requestAllPhotos } from '../../actions/photos_actions';
import { selectAllPhotos } from '../../reducers/selectors';
import { Router } from 'react-router';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosIndex);
