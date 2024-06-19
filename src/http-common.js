import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.VUE_APP_BACKEND_API_BASE,
    headers: {
        "Content-type": "application/json"
    }
})