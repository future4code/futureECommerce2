import React, { Component } from 'react'
import styled from 'styled-components'
import BotaoAction from './BotaoAction'

const Container = styled.section`
    border: 2px solid red;
`
export default class ProdutoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

             
        }
    }
    
    funcaoaserchamada= () => {
        this.props.propaserchamada(this.props.produto.id)
    }
    
    render() {
        const produto = this.props.produto;
        return (
            <Container>
                <p>{produto.name}</p>
                <img src={produto.imageUrl} alt="" />
                <p>{produto.value}</p>
                <BotaoAction cliqueiagora={this.funcaoaserchamada}/>
            </Container>
        )
    }
}
