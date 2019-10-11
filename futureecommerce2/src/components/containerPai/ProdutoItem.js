import React, { Component } from 'react'
import styled from 'styled-components'
import BotaoAction from './BotaoAction'

const Container = styled.section`

`

const Imagem = styled.img`
    width:200px;
    height:200px;
    border-radius:5%;
`

export default class ProdutoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

             
        }
    }
    
    funcaoaserchamada= () => {
        this.props.propaserchamada(this.props.produto)
    }
    
    render() {
        const produto = this.props.produto;
        return (
            <Container className="nes-container is-rounded">
                <p>{produto.name}</p>
                <Imagem src={produto.imageUrl} alt="" />
                <p>R$ {produto.value},00</p>
                <BotaoAction cliqueiagora={this.funcaoaserchamada}/>
            </Container>
        )
    }
}
