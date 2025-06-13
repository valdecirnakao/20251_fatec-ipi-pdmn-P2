import React, { useState , useEffect } from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'

const Busca = ({ onPrevisoesCarregadas }) => {
    const [cidadeDeBusca, setCidadeDeBusca] = useState('São Paulo')
    const [resultados, setResultados] = useState([])

    useEffect(() => {
        const buscarPrevisoes = async () => {
            const { data } = await onPrevisoesCarregadas(cidadeDeBusca)
            setResultados(data)
        }
        if (cidadeDeBusca.length>=3 && !resultados.length === 0) {
            buscarPrevisoes()
        }
        else
        {
            const timeoutId = setTimeout(() => {
                if(cidadeDeBusca) {
                    buscarPrevisoes()
                }
            }, 2000)
            return () => clearTimeout(timeoutId)
        }
    }, [cidadeDeBusca])



  return (
    
        <div
            className='flex flex-column'>
                <IconField iconPosition='left'>
                    <InputIcon className = 'pi pi-search'></InputIcon>
                    <InputText 
                        className='w-full'
                        placeholder='Digite o nome da cidade'
                        onChange={(e) => setCidadeDeBusca(e.target.value)}
                        value={cidadeDeBusca}/>

                </IconField>
        </div>

  )
}

export default Busca