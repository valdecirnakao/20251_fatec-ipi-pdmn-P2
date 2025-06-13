require('dotenv').config()
const axios = require('axios')
const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

const openweathermapClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5'
})

app.get('/search', async (req, res) => {
  const result = await openweathermapClient.get('/forecast', {
    params: {
      q: req.query.municipio,
      appid: process.env.OPENWEATHERMAP_KEY,
      units: 'metric',
      lang: 'pt_br',
      mode: 'json'
    }
  })
  res.json(result.data)
})

const port = 3000
app.listen(port, () => console.log(`Back End OK! Sendo executado na porta ${port} com sucesso.`))