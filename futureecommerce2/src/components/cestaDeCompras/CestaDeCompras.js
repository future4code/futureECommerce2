import React, { Component } from 'react'
import ItemDaCesta from './ItemDaCesta'




export default class CestaDeCompras extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    
    render() {
        const todosItensDaCesta = this.props.todosItensDaCesta.map((item)=>{
            console.log(item)
            return (<ItemDaCesta produto={item}/>)

        })
        
        return (
            <div>
                <h1>Cesta de Compras</h1>
                {todosItensDaCesta}
                <p>Valor Total</p>
            </div>
        )
    }
}
