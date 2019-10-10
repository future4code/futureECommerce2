import React, { Component } from 'react'

export default class BotaoAction extends Component {
    constructor(props) {
        super(props)

    }
    
    render() {
        return (
            <div>
                <button onClick={() => this.props.cliqueiagora()}>Adicionar ao Carrinho</button>
            </div>
        )
    }
}
