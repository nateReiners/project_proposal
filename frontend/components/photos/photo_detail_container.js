import { connect } from 'react-redux';
import PhotoDetail from './photo_detail';
import { fetchSinglePhoto } from '../../util/photos_api_util';

const mapStateToProps = ({ photos }, ownState) => ({
  photo: photos[ownState.params.id]
});

const mapDispatchToProps = dispatch => ({
  fetchSinglePhoto: id => dispatch(fetchSinglePhoto(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail);
