import axios from 'axios';

//const baseURL = 'https://api-mobilespecs.azharimm.site/v2/latest';
const baseURL = 'http://localhost:3000/data.json';
const baseDetail = 'http://api-mobilespecs.azharimm.site/v2/';

const gsmdb = axios.create({
    baseURL: baseURL,
})

const detailgsmdb = axios.create({
    baseURL: baseDetail
})

export { gsmdb,detailgsmdb };