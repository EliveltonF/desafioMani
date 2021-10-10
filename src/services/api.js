import axios from 'axios';

const api = axios.create({
    baseURL:  "httpgi://localhost:3000/",
});

export default api;