import axios from 'axios'

const request = axios.create({
	baseURL: 'https://reqres.in/',
	timeout: 5000
})
  
export default request