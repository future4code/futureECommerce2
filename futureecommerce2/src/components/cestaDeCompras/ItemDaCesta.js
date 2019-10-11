import React, { Component } from 'react'

export default class ItemDaCesta extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }  
    render() {
        const produto = this.props.produto
        return (
            <div>
                <p>Quantidade</p>
                <p>{produto.name}</p>
                <p>{produto.value}</p>
                <button className="nes-btn is-error">Deletar</button>
            </div>
        )
    }
}
