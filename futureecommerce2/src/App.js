import React from 'react';
import './App.css';
import ContainerPai from './components/containerPai/ContainerPai'
import Filtros from './components/filtros/Filtros'
import CestaDeCompras from './components/cestaDeCompras/CestaDeCompras'

const listaDeProdutos = [
  {
    name: "Foguete da Missão Apollo 11",
    value: 100.0,
    imageUrl: "https://picsum.photos/200/200",
    id: 1
  },
  {
    name: "Foguete da Missão Apollo 11",
    value: 100000.0,
    imageUrl: "https://picsum.photos/200/200",
    id: 2
  },
  {
    name: "Foguete da Missão Apollo 11",
    value: 555.0,
    imageUrl: "https://picsum.photos/200/200",
    id: 3
  },
  {
    name: "Foguete da Missão Apollo 11",
    value: 888.0,
    imageUrl: "https://picsum.photos/200/200",
    id: 4
  },
  {
    name: "Foguete da Missão Apollo 11",
    value: 999.0,
    imageUrl: "https://picsum.photos/200/200",
    id: 5
  },
  {
    name: "Foguete da Missão Apollo 11",
    value: 111.0,
    imageUrl: "https://picsum.photos/200/200",
    id: 6
  },
  {
    name: "Foguete da Missão Apollo 11",
    value: 1000.0,
    imageUrl: "https://picsum.photos/200/200",
    id: 7
  },
  {
    name: "Foguete da Missão Apollo 11",
    value: 777.0,
    imageUrl: "https://picsum.photos/200/200",
    id: 8
  }
]

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listadecompras : []
    }
  }

  /*
  1º passo - receber um produto 
  2º passo - iterar na lista de compras 
  3º passo - exibir a lista de compras 
  */

  funcaoaserchamada = (produto) => {
   /* {`
    se existe o "produto" na minha lista de produtos
    vou na minha ista de produtos e aumento sua quantidade
    senao
    `}*/
    
    produto["quantidade"] = 0;
    /*const verificarSeExiste = this.state.listadecompras.map((produto) =>{
    })
    let total ={}
    for (produto of listadecompras){
      total[produto] = (total[produto] || 0) +1
    }
    */
    let upgradelistadecompras = [...this.state.listadecompras,produto]
    this.setState({listadecompras:upgradelistadecompras})  
  }

  render() {
    return (
      <div className="App">
        <Filtros />
        <ContainerPai todosProdutos={listaDeProdutos} produtoselecionado={this.funcaoaserchamada} />
        <CestaDeCompras todosItensDaCesta={this.state.listadecompras}/>
      </div>
    );
  }
}

export default App;
