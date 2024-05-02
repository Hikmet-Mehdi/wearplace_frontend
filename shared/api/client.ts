import axios from 'axios';
const apiClient = axios.create({
  baseURL: 'https://localhost:5050',
});

export { apiClient };
