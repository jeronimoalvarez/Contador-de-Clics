import './App.css';
import { Boton } from './componentes/boton.jsx';
import { Contador } from  './componentes/contador.jsx'
import { useState } from 'react'

function App() {

  const [numClics, setNumClics] = useState(0)

  const manejarClic = () => {
    setNumClics(numClics + 1)
  }

  const reiniciarContador = () => {
    setNumClics(0)
  }

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
        texto='Clic'
        botonDeClic={true}
        manejarClic={manejarClic}/>
        <Boton 
        texto='Reiniciar'
        botonDeClic={false}
        manejarClic={reiniciarContador} />
      </div> 
    </div>
  );
}

export default App;