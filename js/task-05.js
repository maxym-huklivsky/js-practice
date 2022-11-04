const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobs' },
];

const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

refs.list.insertAdjacentHTML('afterbegin', createMarkup(tech));

function createMarkup(arr) {
  return arr
    .map(({ label }) => {
      return `<li>${label}</li>`;
    })
    .join('');
}

refs.input.addEventListener('input', _.debounce(onFilterTech, 300));

function onFilterTech(e) {
  const markup = tech.filter(({ label }) =>
    label.toLowerCase().includes(e.target.value.toLowerCase())
  );

  refs.list.innerHTML = createMarkup(markup);
}
