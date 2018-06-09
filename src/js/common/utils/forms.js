const encodeForm = form => {
  const elements = [].slice.call(form.elements); // convert to Array (from node list)
  const values = elements.map(
    element =>
      `${encodeURIComponent(element.name)}=${encodeURIComponent(element.value)}`
  );
  return values.join('&');
};

const submit = (form, cb) => {
  const r = new XMLHttpRequest();
  r.open(form.method, form.action);
  r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  r.onreadystatechange = () => cb(r);
  r.send(encodeForm(form));
};

export default {
  encodeForm,
  submit,
};
