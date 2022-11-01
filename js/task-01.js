const listEl = document.querySelector('.js-tags');
const selectedTags = [];

listEl.addEventListener('click', onFilter);

// First filter
// function onFilter(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.tags__btn--active');

//   currentActiveBtn?.classList.remove('tags__btn--active');

//   e.target.classList.add('tags__btn--active');
// }

// Second filter
function onFilter(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  e.target.classList.toggle('tags__btn--active');

  if (e.target.classList.contains('tags__btn--active')) {
    selectedTags.push(e.target.dataset.value);
  } else {
    selectedTags.splice(selectedTags.indexOf(e.target.dataset.value), 1);
  }

  console.log(selectedTags);
}
