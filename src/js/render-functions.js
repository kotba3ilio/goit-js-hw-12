import { searchImages } from '/js/pixabay-api';
import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const options = {
  searchString: '',
  pageNumber: 1,
  images: [],
};

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader-wrapper');
const loadMore = document.querySelector('#load-more');
const searchInut = document.querySelector('#search');

function createGalleryItem(item) {
  return `<li>
  <a class="gallery-link" href="${item.largeImageURL}">
  <img class="gallery-image" src="${item.previewURL}" alt="${item.tags}"/>
  <ul class="statistic">
  <li>
  <h3 class="statistic-title">Likes</h3>
  <p class="statistic-text">${item.likes}</p>
  </li>
  <li>
  <h3 class="statistic-title">Views</h3>
  <p class="statistic-text">${item.views}</p>
  </li>
  <li>
  <h3 class="statistic-title">Comments</h3>
  <p class="statistic-text">${item.comments}</p>
  </li>
  <li>
  <h3 class="statistic-title"> Downloads</h3>
  <p class="statistic-text">${item.downloads}</p>
  </li>
  </ul>
  </a>
  </li>`;
}

export function reset(searchString) {
  options.pageNumber = 1;
  options.images = [];
  options.searchString = searchString;
  gallery.innerHTML = '';
  searchInut.classList.remove('error');
}

export function renderGallery() {
  try {
    if (!options.searchString) {
      throw 'Search value can not be null';
    }
    loader.style.display = 'block';
    const result = searchImages(options.searchString, options.pageNumber);
    result
      .then(data => {
        options.images.push(...data.hits);
        if (options.images.length == 0) {
          throw 'Sorry, there are no images matching your search query. Please try again!';
        }
        const galleryItems = options.images
          .map(item => {
            return createGalleryItem(item);
          })
          .join('');
        gallery.innerHTML = galleryItems;
        lightbox.refresh();
        options.pageNumber++;
        scrol(gallery.children[gallery.children.length - 1]);
        if (options.images.length < data.totalHits) {
          loadMore.classList.remove('hidden');
        } else {
          loadMore.classList.add('hidden');
          iziToast.info({
            message:
              "We're sorry, but you've reached the end of search results.",
          });
        }
      })
      .catch(error => {
        iziToast.error({ title: 'Error', message: error });
      })
      .finally(() => {
        loader.style.display = 'none';
      });
  } catch (error) {
    searchInut.classList.add('error');
    searchInut.focus;
    iziToast.error({ message: error });
  }
}

function scrol(li) {
  const rect = li.getBoundingClientRect();
  window.scrollBy({
    top: rect.top,
    height: rect.height,
    behavior: 'smooth',
  });
}
