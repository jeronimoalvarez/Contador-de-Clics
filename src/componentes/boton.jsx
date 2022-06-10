import React from 'react'
import '../hojas-de-estilos/boton.css'

export function Boton({texto, botonDeClic, manejarClic}) {
  return (
    <button 
      className={botonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClic}>
      {texto}
    </button>
  )
}