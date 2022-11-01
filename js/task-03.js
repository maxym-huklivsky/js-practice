const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

let markup = ``;

for (const { url, alt } of images) {
  markup += `<li><img width='500' src="${url}" alt="${alt}" /></li>`;
}

const galleryList = document.querySelector('.gallery');

galleryList.insertAdjacentHTML('beforeend', markup);

galleryList.style.cssText =
  'display: flex; flex-wrap: wrap; gap: 10px; list-style: none; margin: 0; padding: 0';
