import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Login from '../components/login';
import submitForm from '../../common/forms/actions/creators';
import { initUser } from '../../user/actions/creators';

const handleResponse = (xhr, dispatch) => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const response = JSON.parse(xhr.responseText);

    if (xhr.status === 200) {
      dispatch(initUser(response));
      dispatch(push('/dashboard')); // redirect to dashboard
    } else {
      // TODO - dispatch error
      alert(response.message);
    }
  }
};

const mapDispatchToProps = dispatch => ({
  onSubmit: e => {
    e.preventDefault();
    dispatch(submitForm(e.target, handleResponse));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
