import axios from 'axios';

const API_KEY = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const baseUrl = 'https://api.spotify.com/v1/';

const spotify = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default spotify;