import DemoForm from './demo_button';
import { login, logout } from '../../actions/session_actions';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => {
  const guest = {user: {username: "Guest", password: "guestpassword123"}};

  return {
    login: () => dispatch(login(guest))
  };
};

export default connect(
  mapDispatchToProps
)(DemoForm)
