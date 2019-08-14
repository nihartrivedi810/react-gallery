import axios from 'utils/httpClient';

export const fetchImages = () => axios.get('https://jsonplaceholder.typicode.com/photos');

export default {
  fetchImages,
};
