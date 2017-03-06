import { connect } from 'react-redux';
import Profile from './profile';
import { requestSingleUser } from '../../actions/users_actions';
import { Router } from 'react-router';

const mapStateToProps = state => ({
  user: state.user,
  currentUser: state.session.currentUser,
  photos: state.user.photos
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestSingleUser: id => dispatch(requestSingleUser(id))
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
