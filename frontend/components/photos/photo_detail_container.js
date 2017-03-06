import { connect } from 'react-redux';
import PhotoDetail from './photo_detail';
import { requestSinglePhoto, requestAllPhotos } from '../../actions/photos_actions';

const mapStateToProps = ({ photos }, ownState) => ({
  photo: photos[ownState.params.id] || photos.params || {},
  photos
});


const mapDispatchToProps = dispatch => ({
  requestSinglePhoto: id => dispatch(requestSinglePhoto(id)),
  requestAllPhotos: () => dispatch(requestAllPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail);
