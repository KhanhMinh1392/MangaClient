import axios from 'axios';
import urlConfig from '../config/urlConfig';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: urlConfig.local,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString(stringify(params)),
})

axiosClient.interceptors.request.use(async (config) => {
    // token
    return config;
})

axiosClient.interceptors.response.use((response) => {
    if(response && response.data) {
        return response.data;
    }
    return response;
}, (err) => {
    throw err;
})

export default axiosClient;