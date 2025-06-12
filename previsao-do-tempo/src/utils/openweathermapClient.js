import axios from 'axios'
import env from 'dotenv'
export default axios.create({
  baseURL: 'http://localhost:3000/',
  params: {
    appid: env.OPENWEATHERMAP_KEY,
    idioma: 'pt_br',
    unidade: 'metric'
  }
})