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

    funcaoaserchamada= (iddoproduto) => {
        this.props.produtoselecionado(iddoproduto)
    }
    
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
