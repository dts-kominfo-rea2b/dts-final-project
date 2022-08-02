import axios from 'axios';

const API_KEY = '167a214d9812dde74dc310471b96a9f5';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
