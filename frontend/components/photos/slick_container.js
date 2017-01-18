import SimpleSlider from './slick';
import { connect } from 'react-redux';
import { requestAllPhotos } from '../../actions/photos_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = () => {
  return {requestAllPhotos: () => dispatch(requestAllPhotos())};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleSlider);
