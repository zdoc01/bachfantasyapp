export default form => {
	const elements = [].slice.call(form.elements); // convert to Array (from node list)
	const values = elements.map(function(element) {
		return encodeURIComponent(element.name) + '=' + encodeURIComponent(element.value);
	});
	return values.join('&');
};