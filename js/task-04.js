let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementtBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', onDecrementValue);
incrementtBtn.addEventListener('click', onIncrementValue);

function onDecrementValue() {
  counterValue -= 1;
  onAssignValue();
}

function onIncrementValue() {
  counterValue += 1;
  onAssignValue();
}

function onAssignValue() {
  valueEl.textContent = counterValue;
}
