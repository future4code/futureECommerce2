import React from 'react';
import './App.css';
import ContainerPai from './components/containerPai/ContainerPai'
import Filtros from './components/filtros/Filtros'
import CestaDeCompras from './components/cestaDeCompras/CestaDeCompras'


/*Array com os oito produtos do E-commerce*/
const listaDeProdutos = [
  {
    name: "Foguete da Missão Apollo 11",
    value: 100.0,
    imageUrl: "https://future4alunos.slack.com/files/UM7N1QLF8/FPAQXJM1C/img2.jpg",
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

/*Esta classe está passando por "props" uma listadecompras que inicia com um array vazio dos produtos do E-commerce*/
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listadecompras : []
    }
  }

  /*A função chamada de "funcaoaserchamada" recebe o iddoproduto e por meio de uma arrow function passa para listadecompras todos os itens disponíveis na listaDeProdutos, criando um novo array com os valores passados.*/
  /*A  "props" listadecompras é chamada dentro da função, passando a sua prórpia refência com um filter que irá chamar cada produto que faz parte da listadeProdutos, que agora pertence a um novo array formado pela listadecompras. Se o iddoproduto que foi recebido pela função "funcaoaserchamada" for igual em todos os aspectos ao produto e ao id, então o retorno será verdadeiro.*/
  /*E como a listadecompras gerou um novo array com o conteúdo de um array anterior existente e, queremos mudá-la por meio de seu estado que foi definido no construtor antes que a função "funcaoaserchamada" fosse criada, passamos a listadecompras para ela mesma, setando o seu estado atual dizendo que este estado é ele próprio.*/
  
  funcaoaserchamada = (iddoproduto) => {
    let listadecompras = [...listaDeProdutos]
    listadecompras = listadecompras.filter((produto) => {
      if (iddoproduto === produto.id) {
        return true
      }
    })
    this.setState({listadecompras : listadecompras})
  }

  /*A função render está chamando os containers "Filtros", "ContainerPai" e "CestaDeCompras", para que tudo aquilo que existir dentro de cada um deles, seja trazido ao APP.js que é pai de todos esses containers*/
  /*O container "ContainerPai" chamou para si a "props" todosProdutos que recebe a listaDeProdutos e, também chamou a "props" produtoselecionado que recebeu a funcaoaserchamada, declarada anteriormente na classe.*/
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
