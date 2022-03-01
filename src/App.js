
import './App.css';
import ListaProdutos from './components/ListaProdutos';
import SeuNome from './components/SeuNome';
import React from 'react'
import Classe from './Classe';
// import Familia from './components/Familia';
// import Membro from './components/Membro';
// import Pai from './components/Pai';
// import ParImpar from './components/ParImpar';
// import UsuarioLogado from './components/UsuarioLogado';
// import Botao from './components/button';
// import Comeco from './components/Comeco';
//import Contador from './components/Contador';
// import Final from './components/Final';
// import MaxMin from './components/MaxMin';
// import Meio from './components/Meio';
// import Titulo from './components/Titulo';
// import Pessoa from './components/pessoa/Pessoa'
// import Produto from './components/produto/Produto'

function App() {
  return (
    <>
      {/* //  <Comeco /><Meio></Meio><Final></Final><MaxMin min="2" max="10"/><MaxMin min={4} max={15}/> <Titulo principal="Olá" secundario="tudo bem"/>
      //  <Botao/> */}
            {/* <ul>
        <Produto nome="teclado" marca="dell" valor="179,90" azul/>
        <Produto nome="monitor" marca="philips" valor="900,00" verde/>
        <Produto nome="Caneca" marca="QSD" valor="20,00" preto/>
      </ul> */}


      {/* <Pessoa nome="Jonas" idade="28" sexo="M" estado_civil="casado" />
      <Pessoa nome="Will" idade="18" sexo="M" estado_civil="casado" />
      <Pessoa nome="Wanderson" idade="21" sexo="M" estado_civil="solteiro" />  */}
      {/* <Pai/>
      <Familia>
<Membro nome="Muryllo" sobrenome="Soares" />
</Familia>
<ParImpar num={3}/>
<ParImpar num={2}/>
<UsuarioLogado usuario={{ nome: 'Gui', email: 'gui@gui.com' }} />
<UsuarioLogado usuario={{ nome: 'Ana' }} />
<UsuarioLogado usuario={{ email: 'carlos@empresa.com' }} />
<UsuarioLogado usuario={null} />
<UsuarioLogado usuario={{}} /> */}


<ListaProdutos></ListaProdutos>
<SeuNome></SeuNome>
<Classe></Classe>


{/* < Contador inicial = {0} passo = {10} limite = {100}/>< Contador inicial = {100} passo = {20} limite = {500}/> */}
       </> 
  );
}


export default App;
