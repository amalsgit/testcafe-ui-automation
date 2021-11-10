import axios from 'axios'

const axiosClient = axios.create()

//Axios client with response interceptor to log errors during api calls
axiosClient.interceptors.response.use(
    response => response,
    error => {
        console.log(error)
        return Promise.reject(error)
    },
)

export default axiosClient
