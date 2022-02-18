import React from 'react'
import './App.css';
import Botao from './components/button';

import Comeco from './components/Comeco';
import Final from './components/Final';
import MaxMin from './components/MaxMin';
import Meio from './components/Meio';
import Titulo from './components/Titulo';

function App() {
  return (
       <><Comeco /><Meio></Meio><Final></Final><MaxMin min="2" max="10"/><MaxMin min={4} max={15}/> <Titulo principal="Olá" secundario="tudo bem"/>
       <Botao/>
       
       </> 
  );
}

export default App;
