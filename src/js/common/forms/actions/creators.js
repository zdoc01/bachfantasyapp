import { SUBMIT } from './types';
import encodeForm from '../utils/encode-form';

/**
 * Async action creator (thunk) for form submits.
 * Provided callback handles the ajax response and
 * dispatches additional actions if necessary.
 * 
 * @param  {Form}     form HTML form reference
 * @param  {Function} cb   Callback to execute on XHR ready state change
 */
const submitForm = (form, cb) => {
	return (dispatch) => {
		const r = new XMLHttpRequest();
		r.open(form.method, form.action);
		r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		r.onreadystatechange = () => cb(r, dispatch);
		r.send(encodeForm(form));
	};
};

export default submitForm;