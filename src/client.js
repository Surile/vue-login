import axios from "axios";
import { TokenName } from "../consts";
import { excelUrl } from './utils/url'
const baseURL = excelUrl



const client = axios.create({
  baseURL
})

client.interceptors.request.use(config => {
     let token
    token = localStorage.getItem(TokenName)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  })
  client.interceptors.response.use(
    function(response) {
      return response
    },
    function(error) {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem(TokenName)
        return
      }
      throw error
    }
  )



export const  login = params => client.post('/login',params)

export const register = params => client.post('/register',params)

export const fetchUsers = () => client.get('/users')