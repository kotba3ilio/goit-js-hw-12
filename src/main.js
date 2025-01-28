import { renderGallery, galleryOptiopns } from './js/render-functions';
import iziToast from 'izitoast';

const form = document.querySelector('form');
const searchInut = document.querySelector('#search');
const loader = document.querySelector('.loader-wrapper');
const loadMoreBtn = document.querySelector('#load-more');
const gallery = document.querySelector('.gallery');

function reset() {
  galleryOptiopns.pageNumber = 1;
  galleryOptiopns.images = [];
  galleryOptiopns.searchString = searchInut.value;
  gallery.innerHTML = '';
  searchInut.classList.remove('error');
}

async function createGallery() {
  try {
    loader.style.display = 'block';
    await renderGallery(gallery, galleryOptiopns);
    if (galleryOptiopns.images.length < galleryOptiopns.totalHits) {
      loadMoreBtn.classList.remove('hidden');
    } else {
      loadMoreBtn.classList.add('hidden');
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    iziToast.error({ title: 'Error', message: error });
    loadMoreBtn.classList.add('hidden');
  } finally {
    loader.style.display = 'none';
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  reset();
  createGallery();
});

loadMoreBtn.addEventListener('click', () => {
  createGallery();
});
