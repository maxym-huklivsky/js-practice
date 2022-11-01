const colors = [
  { hex: '#eb4034', rbg: '235, 64, 52' },
  { hex: '#eb7434', rbg: '235, 116, 52' },
  { hex: '#ebeb34', rbg: '235, 235, 52' },
  { hex: '#9ceb34', rbg: '156, 235, 52' },
  { hex: '#34eb5c', rbg: '52, 235, 92' },
  { hex: '#34ebcd', rbg: '52, 235, 205' },
  { hex: '#34ebe8', rbg: '52, 235, 232' },
  { hex: '#34c0eb', rbg: '52, 192, 235' },
  { hex: '#3459eb', rbg: '52, 89, 235' },
  { hex: '#b434eb', rbg: '180, 52, 235' },
  { hex: '#eb34bd', rbg: '235, 52, 189' },
  { hex: '#eb3474', rbg: '235, 52, 116' },
];

const paletCont = document.querySelector('.js-palette');
const cardsMarkup = createColorCardMarkup(colors);

paletCont.insertAdjacentHTML('beforeend', cardsMarkup);

function createColorCardMarkup(colors) {
  return colors
    .map(({ hex, rbg }) => {
      return `
		<div class="color-card">
			<div
				  class="color-swatch"
				  data-hex="${hex}"
				  data-rbg="${rbg}"
				  style="background-color: ${hex}"
			></div>
			<div class="color-meta">
				  <p>HEX: ${hex}</p>
				  <p>RBG: ${rbg}</p>
			</div>
		 </div>
		`;
    })
    .join('');
}

paletCont.addEventListener('click', onChangeBgColor);

function onChangeBgColor(e) {
  document.body.style.backgroundColor = e.target.dataset.hex;
}
