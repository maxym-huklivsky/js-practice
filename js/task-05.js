const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onChangeSpanEl);

function onChangeSpanEl(event) {
  spanEl.textContent = event.currentTarget.value;

  if (spanEl.textContent === '') {
    spanEl.textContent = 'Anonymous';
  }
}
