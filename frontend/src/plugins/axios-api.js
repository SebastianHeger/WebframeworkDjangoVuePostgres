import axios from 'axios'
import store from '../store/index.js'

const getAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 5000,
})

getAPI.interceptors.request.use(
    config => {
        const token = store.getters.accessToken
        console.log(token)
        if (token !== null) {
            config.headers.authorization = `Bearer ${token}`
        }
        return config
    },
    error => Promise.reject(error)
)

export { getAPI }
