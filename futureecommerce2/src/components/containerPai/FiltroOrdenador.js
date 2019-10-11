import React, { Component } from "react";

export default class FiltroOrdenador extends Component {
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
