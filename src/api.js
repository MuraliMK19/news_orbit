import axios from 'axios';

const api = axios.create({
    baseURL: process.env.BACKEND_URL || "http://localhost:80/api/news",
});

export default api;
