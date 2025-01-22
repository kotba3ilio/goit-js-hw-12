import { searchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import iziToast from 'izitoast';

const searchInut = document.querySelector('#search');
const loader = document.querySelector('.loader-wrapper');

document.querySelector('.submit').addEventListener('click', event => {
  event.preventDefault();
  loader.style.display = 'block';
  const result = searchImages(searchInut.value);
  result
    .then(data => {
      renderGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({ title: 'Error', message: error });
    })
    .finally(() => {
      loader.style.display = 'none';
    });
});
