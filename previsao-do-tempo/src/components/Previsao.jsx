import React from 'react'
import striptags from 'striptags'

const Previsao = ({dataHora, temperaturaMinima, temperaturaMaxima, umidadeRelativa, icone, descricao}) => {
    
    return (
    <div className='text-center p-3 border-1 surface-border m-2'>
        <h2>{dataHora}</h2>
        <p>Temperatura Mínima: {temperaturaMinima}°C</p>
        <p>Temperatura Máxima: {temperaturaMaxima}°C</p>
        <p>Umidade Relativa do Ar: {umidadeRelativa}%</p>
        <p>Descrição: {striptags(descricao)}</p>
        <img src={`http://openweathermap.org/img/wn/${icone}.png`} alt={descricao} />
    </div>
  )
}

export default Previsao