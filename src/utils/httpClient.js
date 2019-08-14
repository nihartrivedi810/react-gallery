import axios from 'axios';

/*
  This file can be used for custom error handling and showing global(app-level) error messages.
  Custom headers and access tokens needed for the api-server should be set here.
*/

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// pick data key from the response and pass forward
instance.interceptors.response.use(({ data }) => data, null);

export default instance;
