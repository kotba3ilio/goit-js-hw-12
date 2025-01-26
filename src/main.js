import { renderGallery, reset } from './js/render-functions';

document.querySelector('.search').addEventListener('input', event => {
  reset(event.target.value);
});

document.querySelectorAll('.button').forEach(button =>
  button.addEventListener('click', () => {
    renderGallery();
  })
);
