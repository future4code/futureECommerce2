import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.section`
    > *{
        margin-bottom: 5px;
    }
`;

export default class Filtros extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      valorInputVmin: "",
      valorInputVmax: "",
      valorInputBusca: ""
    }
  }
  
  onChangeVMin = (e) =>{
    this.setState({
      valorInputVmin: Number(e.target.value)
    });
  }
  onChangeVMax = (e) =>{
    this.setState({
      valorInputVmax: Number(e.target.value)
    });
  }
  onChangeBusca = (e) =>{
    this.setState({
      valorInputBusca: e.target.value
    });
  }
  handleSendFilter = () =>{
    this.props.onChangeFilter(this.state.valorInputVmin,this.state.valorInputVmax,this.state.valorInputBusca);
  }
  render() {
    return (
      <Container className="nes-container with-title is-rounded is-centered">
        <p className="title"><h3>Filtros</h3></p>
        <div className="nes-field is-inline">
          <label htmlFor="vmin">Valor Mínimo</label>
          <input id="vmin" type="number" placeholder="R$" className="nes-input" value={this.state.valorInputVmin} onChange={this.onChangeVMin}/>
        </div>
        <div className="nes-field is-inline">
          <label htmlFor="vmax">Valor Máximo</label>
          <input id="vmax" type="number" placeholder="R$" className="nes-input" value={this.state.valorInputVmax} onChange={this.onChangeVMax}/>
        </div>
        <div className="nes-field">
          <label htmlFor="busca">Buscar Item</label>
          <input id="busca" placeholder="Qual item ?" className="nes-input" value={this.state.valorInputBusca} onChange={this.onChangeBusca}/>
        </div>
        <button className="nes-btn is-warning" onClick={this.handleSendFilter}>Filtrar</button>
      </Container>
    );
  }
}
