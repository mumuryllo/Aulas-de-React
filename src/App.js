import React from 'react'
import './App.css';
// import Botao from './components/button';

// import Comeco from './components/Comeco';
import Contador from './components/Contador';
// import Final from './components/Final';
// import MaxMin from './components/MaxMin';
// import Meio from './components/Meio';
// import Titulo from './components/Titulo';

function App() {
  return (
    <>
      {/* //  <Comeco /><Meio></Meio><Final></Final><MaxMin min="2" max="10"/><MaxMin min={4} max={15}/> <Titulo principal="Olá" secundario="tudo bem"/>
      //  <Botao/> */}
< Contador inicial = {0} passo = {10} limite = {100}/>< Contador inicial = {100} passo = {20} limite = {500}/>
       </> 
  );
}

export default App;
