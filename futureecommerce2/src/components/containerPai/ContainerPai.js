import React, { Component } from 'react'
import FiltroOrdenador from './FiltroOrdenador'
import Produtos from './Produtos'
import styled from 'styled-components'

const Container = styled.section`
    border: 2px solid black;
`

export default class ContainerPai extends Component {
    constructor(props) {
        super(props)
        this.state = {
             
        }
    }
    
    render() {
        return (
            <Container>
                <FiltroOrdenador/>
                <Produtos todosProdutos={this.props.todosProdutos}/>
            </Container>
        )
    }
}
