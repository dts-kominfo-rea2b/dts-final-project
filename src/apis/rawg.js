import axios from 'axios';

const rawg = axios.create({
    baseURL: 'https://api.rawg.io/api/games',
    params: {
        key : process.env.REACT_API_KEY,
    }
});

export default rawg;
