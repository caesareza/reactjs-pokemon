import axios from 'axios';

axios.interceptors.request.use(
    config => {
        const newConfig = {
            ...config,
            ...{
                baseURL: `https://pokeapi.co/api/v2/`,
                headers: {
                    'Content-type': 'application/json',
                    Authorization: '',
                },
            },
        };
        return newConfig;
    },
    err => Promise.reject(err)
);

export default axios;