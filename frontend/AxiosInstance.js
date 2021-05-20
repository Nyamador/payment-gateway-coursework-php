import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000/_api/',
    timeout: 5000,
    headers: {'authorization': 'df15dd8100e07cba1d432b48a6a21743fe9de497'}
})

export default AxiosInstance;