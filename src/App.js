import { useState } from 'react';
import './App.css';
import Personajes from './components/Personajes';
import imagenPrincipal from './img/rick-morty.png';


function App() {
  const [personajes, setPersonajes] = useState(null);

  const buscarPersonajes = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const apiJSON = await api.json();
    setPersonajes(apiJSON.results);
  }

  return (
    <div>
      <h1 className='title'>Rick and Morthy</h1>
      { personajes ? <Personajes personajes = { personajes } /> : 
        <>
          <img src={imagenPrincipal} className='img-home'/>
          <button className='btn-search' onClick={buscarPersonajes}>Buscar Personajes</button>
        </>
      }
    </div>
  )
}

export default App;
