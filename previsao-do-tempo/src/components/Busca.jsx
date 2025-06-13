import React, { useState } from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'

const Busca = ({ onPrevisoesCarregadas }) => {
    const [cidadeDeBusca, setCidadeDeBusca] = useState('São Paulo')

    const onFormSubmit = (event) => {
        event.preventDefault()
        onPrevisoesCarregadas(cidadeDeBusca)
    }

  return (
    <form onSubmit={onFormSubmit}>
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
                <Button
                    label='OK'
                    outlined/>
        </div>
    </form>
  )
}

export default Busca