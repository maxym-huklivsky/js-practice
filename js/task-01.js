// №1
const categoriesEl = document.querySelector('#categories');

console.log(`Number of categories: ${categoriesEl.children.length}`);

// №2
for (const children of categoriesEl.children) {
  console.log(`Category: ${children.querySelector('h2').textContent}`);

  console.log(`Elements: ${children.querySelectorAll('li').length}`);
}
