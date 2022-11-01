function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('[data-create]'),
  buttonDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.buttonCreate.addEventListener('click', createBoxes);
refs.buttonDestroy.addEventListener('click', destroyBoxes);

function createBoxes() {
  const markup = [];
  let acc = 30;

  for (let i = 0; i < refs.input.value; i++) {
    const div = document.createElement('div');
    div.style.width = `${acc}px`;
    div.style.height = `${acc}px`;
    div.style.backgroundColor = getRandomHexColor();

    acc += 10;
    markup.push(div.outerHTML);
  }

  refs.boxes.insertAdjacentHTML('beforeend', markup.join(''));
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}
