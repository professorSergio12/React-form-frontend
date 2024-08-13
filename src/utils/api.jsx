import axios from 'axios';

const token = localStorage.getItem('token');

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
});

export default apiClient;