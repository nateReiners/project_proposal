import Home from './home';
import { login, logout, signup } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  
};

const mapDispatchToProps= dispatch => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
