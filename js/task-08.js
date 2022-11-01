const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  const { email, password } = event.currentTarget.elements;

  event.preventDefault();

  if (email.value === '' || password.value === '') {
    alert(`Всі поля обов'язково повинні бути заповнені!`);
    return;
  }

  const infAboutCustomer = {
    email: email.value,
    password: password.value,
  };

  console.log(infAboutCustomer);

  event.currentTarget.reset();
}
