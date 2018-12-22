import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://my-project-03-57762.firebaseio.com/'

})

export default instance