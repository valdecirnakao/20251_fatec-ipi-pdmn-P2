import Busca from './components/Busca'
import env from 'react-dotenv'
import { useState } from 'react'
import Previsao from './components/Previsao.jsx'
import openweathermapClient from './utils/openweathermapClient.js'

const App = () => {
  const [previsoes, setPrevisoes] = useState([])
  const onPrevisoesCarregadas = async (cidade) => {
    await openweathermapClient.get('search', {
      params: {
        q: cidade,
        appid: env.OPENWEATHERMAP_KEY,
        units: 'metric',
        lang: 'pt_br'
      }
    }).then(result => setPrevisoes(result.data.list))
  }

  return (
    <div className = 'grid justify-content-center'>
      <div className = 'col-12'>
        <h1 className = 'text-center'>Exibir previsões climáticas para a cidade de...</h1>
      </div>
      <div className = 'col-12'>
        <Busca onPrevisoesCarregadas={onPrevisoesCarregadas}/>
      </div>
      <div className = 'col-12'>
        {previsoes.map((item) => (
          <Previsao
            key={item.dt}
            dataHora={item.dt_txt}
            temperaturaMinima={item.main.temp_min}
            temperaturaMaxima={item.main.temp_max}
            umidadeRelativa={item.main.humidity}
            icone={item.weather[0].icon}
            descricao={item.weather[0].description}/>
        ))}
      </div>
    </div>
  )
}

export default App