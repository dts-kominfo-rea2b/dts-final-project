import axios from 'axios';

const rawg = axios.create({
    baseURL: 'https://api.rawg.io/api/games',
    params: {
        key : 'b3e8ba01ddd44d1d8507fe2dd8d95b2d',
    }
});

export default rawg;