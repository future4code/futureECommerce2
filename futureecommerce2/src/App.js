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
    name: "Foguete trues",
    value: 777.0,
    imageUrl: "https://picsum.photos/200/200",
    id: 8
  }
];

let listaDeProdutosFiltrada = [...listaDeProdutos];

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listadecompras : [],
      listaDeProdutosFiltrada: listaDeProdutos
    }
  }

  funcaoaserchamada = (iddoproduto) => {
    let listadecompras = [...listaDeProdutos]
    listadecompras = listadecompras.filter((produto) => {
      if (iddoproduto === produto.id) {
        return true
      }
    })
    this.setState({listadecompras : listadecompras})
  }

  filtrarListaDeProdutos(vmin,vmax,itemBuscado){
    const minimo = vmin || 0;
    const maximo = vmax || Number.MAX_SAFE_INTEGER;
    const buscado = itemBuscado || "";
    const novaListaFiltrada = [...listaDeProdutos].filter((element)=>{
      if((element.value >= minimo && element.value <= maximo) && (buscado === element.name || buscado === "")){
        return true
      }
      return false
    });
    listaDeProdutosFiltrada = [...novaListaFiltrada];
    console.log(listaDeProdutosFiltrada)
    this.setState({
      listaDeProdutosFiltrada: novaListaFiltrada
    });
  }
  render() {
    return (
      <div className="App">
        <Filtros onChangeFilter = {this.filtrarListaDeProdutos.bind(this)}/>
        <ContainerPai todosProdutos={listaDeProdutosFiltrada} produtoselecionado={this.funcaoaserchamada} />
        <CestaDeCompras todosItensDaCesta={this.state.listadecompras}/>
      </div>
    );
  }
}

export default App;
