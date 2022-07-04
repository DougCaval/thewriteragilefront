import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_TW_URL
    
})

export default api;