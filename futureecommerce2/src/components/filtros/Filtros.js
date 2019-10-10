import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.section`
    border: 2px solid black;
`

export default class Filtros extends Component {
    render() {
        return (
            <Container>
                <label for="vmin">Valor Minimo</label>
                <input id="vmin" type="number" placeholder="Valor Minimo"/>
                <label for="vmax">Valor Minimo</label>
                <input id="vmax" type="number" placeholder="Valor Maximo"/>
                <label for="busca">Buscar Item</label>
                <input id="busca" placeholder="Buscar item"/>
            </Container>
        )
    }
}
