import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.currentTarget.elements['search-text'].value.trim();
  if (!query) {
    return;
  }
  clearGallery();
  showLoader();
  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        hideLoader();
        return;
      }

      createGallery(data.hits);
      hideLoader();
    })
    .catch(() => {
      iziToast.error({
        message: 'Something went wrong. Please try again!',
      });
      hideLoader();
    });
});
