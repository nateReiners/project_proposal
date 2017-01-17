import UploadButton from './upload_button';
import { createPhoto } from '../../actions/photos_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  currentUserID: state.session.currentUser.id
});

const mapDispatchToProps = (dispatch) => ({
    createPhoto: photo => dispatch(createPhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadButton);
