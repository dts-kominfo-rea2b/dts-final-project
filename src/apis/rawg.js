import axios from 'axios';

const rawg = axios.create({
    baseURL: 'https://api.rawg.io/api/games',
    params: {
        key : API_KEY,
    }
});

export default rawg;
