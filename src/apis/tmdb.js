import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'df7934f249ad19ef751a3c7ae05883e7';

const tmdb = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
    },
});

export default tmdb;