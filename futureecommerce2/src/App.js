import React from 'react';
import './App.css';
import  ContainerPai  from './components/containerPai/ContainerPai'
import Filtros from './components/filtros/Filtros'
import CestaDeCompras from './components/cestaDeCompras/CestaDeCompras'

const listaDeProdutos = [
  {
    name: "Foguete da Missão Apollo 11",
    value: 100.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    name: "Foguete da Missão Apollo 11",
    value: 100000.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    name: "Foguete da Missão Apollo 11",
    value: 555.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    name: "Foguete da Missão Apollo 11",
    value: 888.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    name: "Foguete da Missão Apollo 11",
    value: 999.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    name: "Foguete da Missão Apollo 11",
    value: 111.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    name: "Foguete da Missão Apollo 11",
    value: 1000.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    name: "Foguete da Missão Apollo 11",
    value: 777.0,
    imageUrl: "https://picsum.photos/200/200",
  }
]

function App() {
  return (
    <div className="App">
      <Filtros/>
      <ContainerPai todosProdutos={listaDeProdutos}/>
      <CestaDeCompras todosItensDaCesta={listaDeProdutos}/>
    </div>
  );
}

export default App;
