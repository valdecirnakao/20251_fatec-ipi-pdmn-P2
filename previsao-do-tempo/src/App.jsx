import Busca from './components/Busca'
import openweathermapClient from './utils/openweathermapClient.js'
import React from 'react'
import env from 'react-dotenv'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [previsoes, setPrevisoes] = useState([])


//api.openweathermap.org/data/2.5/forecast?q={cidade}&appid={API_key}&units=metric
/*
- temperatura mínima
- temperatura máxima
- umidade relativa do ar
- nome de um ícone ilustrativo
- descrição
*/

  const onPrevisoesCarregadas = async (cidade) => {
                await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
                params: {
                    q: cidade,
                    appid: '9ae28c60bbe4c0e2d4c015ead975202e',
                    units: 'metric',
                    lang: 'pt_br'
                }
            }).then(result => setPrevisoes(result.data.list))

  }

  return (
    <div
      className = 'grid justify-content-center'>
        <div className = 'col-12'>
          <h1 className = 'text-center'>Exibir previsões climáticas para a cidade de...
          </h1>
        </div>
        <div className = 'col-12'>
          <Busca onPrevisoesCarregadas={onPrevisoesCarregadas} />
        </div>
        <div className = 'col-12'>
          {
            previsoes.map((item) => (
              <div key={item.dt}>
                <h2>{item.dt_txt}</h2>
                <p>Temperatura Mínima: {item.main.temp_min}°C</p>
                <p>Temperatura Máxima: {item.main.temp_max}°C</p>
                <p>Umidade Relativa do Ar: {item.main.humidity}%</p>
                <p>Descrição: {item.weather[0].description}</p>
                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} />
              </div>
          ))
          }

        </div>
    </div>
  )
}

export default App