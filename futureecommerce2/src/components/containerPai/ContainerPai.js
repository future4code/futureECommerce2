import React, { Component } from 'react'
import FiltroOrdenador from './FiltroOrdenador'
import Produtos from './Produtos'
import styled from 'styled-components'

const Container = styled.section`
    > *{
        margin-bottom: 10px;
    }
`

export default class ContainerPai extends Component {
    constructor(props) {
        super(props)
        this.state = {
             
        }
    }


    /*A função chamada de "funcaoaserchamada" recebe o iddoproduto e por meio de uma arrow function chama a "props" produtoselecionado e a transforma numa função, que por sua vez recebe o iddoproduto.*/
    /*A "props" produtoselecionado chama a funcao criada na classe ("funcaoaserchamada") e passa dentro do container Produtos.*/
    funcaoaserchamada= (produto) => {
        this.props.produtoselecionado(produto)
    }
    
    /*A função render está chamando o container "Container", para que dentro dele os containers "FIltroOrdenador" e "Produtos", tudo aquilo que existir dentro de cada um deles, seja trazido ao Container.js que é pai de todos esses containers*/
    /*O container "ContainerPai" chamou para si a "props" todosProdutos que recebe a listaDeProdutos e, também chamou a "props" produtoselecionado que recebeu a funcaoaserchamada, declarada anteriormente na classe.*/
    render() {
        return (
            <Container className="nes-container with-title is-centered is-rounded">
                <p class="title"><h3>Produtos</h3></p>
                <FiltroOrdenador/>
                <Produtos todosProdutos={this.props.todosProdutos} produtoselecionado={this.funcaoaserchamada}/>
            </Container>
        )
    }
}
