import React, { Component } from 'react'
import ProdutoItem from './ProdutoItem'
import styled from 'styled-components'

const Container = styled.section`
    border: 2px solid black;
`
export default class Produtos extends Component {
    constructor(props) {
        super(props)
        this.state = {
             
        }
    }
    
    render() {
        const todosProdutosItem = this.props.todosProdutos.map((item)=>{
            return (<ProdutoItem produto={item}/>);
        })
        return (
            <Container>
                {todosProdutosItem}
            </Container>
        )
    }
}
