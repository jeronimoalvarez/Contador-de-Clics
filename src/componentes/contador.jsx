import React from 'react'
import '../hojas-de-estilos/contador.css'

export function Contador({numClics}) {
    return (
        <div className='contador'>
            {numClics}
        </div>
    )
}