import axios from 'axios'

export const apiUrl = () => {
    return `http://localhost:3000/api/1.0/`
}

export const api = axios.create({
    baseURL: apiUrl()
})

export const addApiErrorHandlerInterceptor = (callback) => {
    api.interceptors.response.use(function(response) {
        return response
    }, function(error) {
        callback(error)
        return Promise.reject(error)
    })
}
