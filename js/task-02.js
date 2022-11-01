const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayIng = ingredients.map(ingredient => {
  const newEl = document.createElement('li');
  newEl.textContent = ingredient;
  newEl.classList.add('item');

  return newEl;
});

const ingredientsList = document.querySelector('#ingredients');

ingredientsList.append(...arrayIng);
