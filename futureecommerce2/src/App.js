import React from 'react';
import './App.css';
import ContainerPai from './components/containerPai/ContainerPai'
import Filtros from './components/filtros/Filtros'
import CestaDeCompras from './components/cestaDeCompras/CestaDeCompras'




/*Array com os oito produtos do E-commerce*/
const listaDeProdutos = [
  {
    name: "Future Mission",
    value: 100,
    imageUrl: require('./fotos/img1.jpeg'),
    id: 1
  },
  {
    name: "We've a problem!",
    value: 150,
    imageUrl: require('./fotos/img2.jpg'),
    id: 2
  },
  {
    name: "Space-Between",
    value: 55,
    imageUrl: require('./fotos/img3.jpg'),
    id: 3
  },
  {
    name: "Space-Around",
    value: 88,
    imageUrl: require('./fotos/img4.jpg'),
    id: 4
  },
  {
    name: "Use a pen",
    value: 99,
    imageUrl: require('./fotos/img5.jpg'),
    id: 5
  },
  {
    name: "Champions",
    value: 110,
    imageUrl:  require('./fotos/img6.jpg'),
    id: 6
  },
  {
    name: "Missão Júpter",
    value: 100.0,
    imageUrl: require('./fotos/img7.jpg'),
    id: 7
  },
  {
    name: "PicShirt",
    value: 77.0,
    imageUrl: require('./fotos/img8.jpg'),
    id: 8
  }
];

let listaDeProdutosFiltrada = [...listaDeProdutos];

/*Esta classe está passando por "props" uma listadecompras que inicia com um array vazio dos produtos do E-commerce*/
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listadecompras : [],
      listaDeProdutosFiltrada: listaDeProdutos
    }
  }


  /*A função chamada de "funcaoaserchamada" recebe o iddoproduto e por meio de uma arrow function passa para listadecompras todos os itens disponíveis na listaDeProdutos, criando um novo array com os valores passados.*/
  /*A  "props" listadecompras é chamada dentro da função, passando a sua prórpia refência com um filter que irá chamar cada produto que faz parte da listadeProdutos, que agora pertence a um novo array formado pela listadecompras. Se o iddoproduto que foi recebido pela função "funcaoaserchamada" for igual em todos os aspectos ao produto e ao id, então o retorno será verdadeiro.*/
  /*E como a listadecompras gerou um novo array com o conteúdo de um array anterior existente e, queremos mudá-la por meio de seu estado que foi definido no construtor antes que a função "funcaoaserchamada" fosse criada, passamos a listadecompras para ela mesma, setando o seu estado atual dizendo que este estado é ele próprio.*/
  
  funcaoaserchamada = (produto) => {
    produto["quantidade"] = 0;

    let upgradelistadecompras = [...this.state.listadecompras,produto]
    this.setState({listadecompras:upgradelistadecompras})  
  }


  /*A função render está chamando os containers "Filtros", "ContainerPai" e "CestaDeCompras", para que tudo aquilo que existir dentro de cada um deles, seja trazido ao APP.js que é pai de todos esses containers*/
  /*O container "ContainerPai" chamou para si a "props" todosProdutos que recebe a listaDeProdutos e, também chamou a "props" produtoselecionado que recebeu a funcaoaserchamada, declarada anteriormente na classe.*/

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
