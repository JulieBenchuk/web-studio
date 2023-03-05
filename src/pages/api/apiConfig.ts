import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL:
        process.env.NODE_ENV === 'development'
            ? ''
            : '',

    withCredentials: true,
})