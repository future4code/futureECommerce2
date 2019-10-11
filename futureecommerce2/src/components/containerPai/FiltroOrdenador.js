import React, { Component } from "react";

export default class FiltroOrdenador extends Component {
  
constructor(props) {
    super(props)

    this.state = {
        filtrodeordem
         
    }
}
    /*1 passo: receber a lista de itens
    2 passo: acionar os itens de maior valor e mostrar na tela
    3 passo: acionar os itens de menor valor e mostrar na tela
    (Preciso usar o if e o else?)
    */
funcaoaserchamada= () => {
    const ordemdalistadeprodutos = [produtos, ...listaDeProdutos]
    console.log(ordemdalistadeprodutos)
    this.setState.listaDeProdutos({ordemdalistadeprodutos})
}

  render() {
    return (
      <div>
        <label for="default_select">Ordenar Items</label>
        <div class="nes-select">
          <select required id="default_select">
            <option value="pd">Preço decrescente</option>
            <option value="pc">Preço crescente</option>
          </select>
        </div>
      </div>
    );
  }
}
