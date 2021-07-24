import React, {useContext} from "react";
import GlobalStyle from '../../globalStyle';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Container, PedidosWrapper, PedidoItem, Alert} from "./style";
import {CartContext} from "../../Context/CartContext";
import { Link } from "react-router-dom";

const Pedidos = () =>{
    const { pedidos, numberFormat } = useContext(CartContext);
    return(
    <main>
    <GlobalStyle />
    <Header />
    <Container>
      <h1>Pedidos</h1>
      { pedidos.length > 0 ? 
      <PedidosWrapper>
        {pedidos.map(pedido => (
          <PedidoItem key={pedido.id}>
            <div>Cliente: {pedido.cliente.nome}</div>
            <div>Valor: {numberFormat(pedido.pedido.reduce((total, item) => total + item.preco, 0))}</div>
            <Link to={`pedido/${pedido.id}`} className="ver_pedido">Ver Pedido</Link>
          </PedidoItem>
        ))}
      </PedidosWrapper>
       : <Alert>Ainda não existem pedidos</Alert>}

    </Container>
    <Footer />
    </main>
  );
}

export default Pedidos;