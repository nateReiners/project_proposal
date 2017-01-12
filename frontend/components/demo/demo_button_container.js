import DemoButton from './demo_button';
import { login, logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
    loginGuest: user => dispatch(login({username: "Guest", password: "guestpassword123"}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DemoButton)
