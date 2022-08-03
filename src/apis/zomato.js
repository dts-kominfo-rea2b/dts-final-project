import axios from 'axios';

const BASE_URL = 'https://developers.zomato.com/api/v2.1/';
const API_KEY = 'bab7f707b72ea0b1154b7d786a9f05e4';

const zomato = axios.create({
    baseURL: BASE_URL,
    headers: {
        "user-key": "497a784395906805fa9ab0248dcde10d"
      },
});

export default zomato;