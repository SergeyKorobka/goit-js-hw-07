'use strict';

const refs = {
  form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const email = formData.get('email').trim();
  const password = formData.get('password').trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }

  console.log({ email, password });
  e.currentTarget.reset();
}
