import striptags from 'striptags'

const Previsao = ({dataHora, temperaturaMinima, temperaturaMaxima, umidadeRelativa, icone, descricao}) => {    
  const dateUtc = new Date(dataHora.replace(" ", "T") + "Z");
  const dataHoraBrasil = dateUtc.toLocaleString("pt-BR", {
  timeZone: "America/Sao_Paulo",
  hour12: false,
});
  return (
    <div className='text-center col-12 p-3 border-1 m-2'>
      <h2>{striptags(dataHoraBrasil)}</h2>
      <p>Temperatura Mínima: {temperaturaMinima}°C</p>
      <p>Temperatura Máxima: {temperaturaMaxima}°C</p>
      <p>Umidade Relativa do Ar: {umidadeRelativa}%</p>
      <p>Previsão: {striptags(descricao)}</p>
      <img src={`http://openweathermap.org/img/wn/${icone}.png`} alt={striptags(descricao)} />
    </div>
  )
}

export default Previsao