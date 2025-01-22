import SimpleLightbox from 'simplelightbox';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
const gallery = document.querySelector('.gallery');

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

export function renderGallery(images) {
  gallery.innerHTML = '';
  if (images.length == 0) {
    throw 'Sorry, there are no images matching your search query. Please try again!';
  }
  const galleryItems = images
    .map(item => {
      return createGalleryItem(item);
    })
    .join('');
  gallery.innerHTML = galleryItems;
  lightbox.refresh();
}
