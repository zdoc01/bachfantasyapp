import { connect } from 'react-redux';
import jsCookie from 'js-cookie';
import RightNav from '../components/right-nav';
import { logoutUser } from '../../user/actions/creators';

const mapDispatchToProps = dispatch => ({
  onLogout: (/* e */) => {
    jsCookie.remove('username');
    dispatch(logoutUser());
  },
});

const mapStateToProps = state => ({
  username: state.user.username,
});

export default connect(mapStateToProps, mapDispatchToProps)(RightNav);
