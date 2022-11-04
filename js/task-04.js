const content = document.querySelector('.content');
let player = 'X';
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function createMarkup() {
  let markup = '';

  for (let i = 1; i <= 9; i++) {
    markup += `<div class='item' data-id='${i}'></div>`;
  }

  return markup;
}

content.insertAdjacentHTML('afterbegin', createMarkup());
content.addEventListener('click', onClick);

function onClick(e) {
  if (e.target.textContent) {
    return;
  }

  e.target.textContent = player;

  player = player === 'X' ? '0' : 'X';

  if (
    win.some(vic =>
      vic.every(id => content.querySelectorAll('.item')[id].textContent === 'X')
    ) ||
    win.some(vic =>
      vic.every(id => content.querySelectorAll('.item')[id].textContent === '0')
    )
  ) {
    alert('Game over');
    content.innerHTML = createMarkup();
    player = 'X';
  }
}

const restartEl = document.querySelector('.restart');
restartEl.addEventListener('click', () => {
  content.innerHTML = createMarkup();
  player = 'X';
});
