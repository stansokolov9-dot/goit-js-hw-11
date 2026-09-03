const API_KEY = '57384775-21d9883ab68c6dacdc3b0975e';
import axios from 'axios';
export function getImagesByQuery(query) {
  return axios
  .get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
  .then(response => response.data);
}
