import { connect } from 'react-redux';
import { requestSingleUser, updateUser } from '../../actions/users_actions';
import ProfileForm from './profile_form';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestSingleUser: id => dispatch(requestSingleUser(id)),
  updateUser: user => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm);
