const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onValidateInput);

function onValidateInput(event) {
  if (
    String(event.currentTarget.value.length) ===
    event.currentTarget.dataset.length
  ) {
    event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.add('valid');
    return;
  }

  event.currentTarget.classList.remove('valid');
  event.currentTarget.classList.add('invalid');
}
