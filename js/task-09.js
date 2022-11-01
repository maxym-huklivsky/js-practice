function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const nameColor = document.querySelector('.color');

buttonEl.addEventListener('click', onChangeBgColor);

function onChangeBgColor() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  nameColor.textContent = randomColor;
}
