import React, { Component } from "react";
import ItemDaCesta from "./ItemDaCesta";
import styled from "styled-components";

const Container = styled.section`
  > * {
    margin-bottom: 5px;
  }
`;
export default class CestaDeCompras extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const todosItensDaCesta = this.props.todosItensDaCesta.map(item => {
      return <ItemDaCesta produto={item} />;
    });
    return (
      <Container className="nes-container with-title is-rounded is-centered">
        <p className="title">
          <h3>Cesta de Compras</h3>
        </p>
        {todosItensDaCesta}
        <p>Valor Total</p>
      </Container>
    );
  }
}
