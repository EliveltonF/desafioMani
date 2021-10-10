import axios from 'axios';

const api = axios.create({
    baseURL:  "https://desafio-mani.vercel.app/",
});

export default api;