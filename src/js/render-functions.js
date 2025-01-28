import { searchImages } from '/js/pixabay-api';
import SimpleLightbox from 'simplelightbox';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

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

export const galleryOptiopns = {
  searchString: '',
  pageNumber: 1,
  images: [],
  totalHits: 0,
  pageSize: 15,
};

export async function renderGallery(gallery, options) {
  await searchImages(
    options.searchString,
    options.pageNumber,
    options.pageSize
  ).then(response => {
    const { data: data } = response;
    if (data.hits.length == 0) {
      throw 'Sorry, there are no images matching your search query. Please try again!';
    }
    options.images.push(...data.hits);
    const galleryItems = options.images
      .map(item => {
        return createGalleryItem(item);
      })
      .join('');
    gallery.innerHTML = galleryItems;
    lightbox.refresh();
    scrol(gallery.children[gallery.children.length - options.pageSize + 1]);
    options.pageNumber += 1;
    options.totalHits = data.totalHits;
  });
}

function scrol(li) {
  const rect = li.getBoundingClientRect();
  window.scrollBy({
    top: rect.bottom,
    height: rect.height * 2,
    behavior: 'smooth',
  });
}
