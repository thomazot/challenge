import Axios from 'axios'

const api = Axios.create({
    baseURL: 'http://www.mocky.io/v2/',
})

export default api
