import { connect } from 'react-redux';
import Profile from './profile';
import { requestSingleUser } from '../../actions/users_actions';
import { Router } from 'react-router';

const mapStateToProps = state => ({
  user: requestSingleUser(state),
  currentUser: state.session.currentUser,
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
