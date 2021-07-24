import React, {useContext} from "react";
import { Link } from "react-router-dom";
import GlobalStyle from '../../globalStyle';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Container, CartWrapper, CartItem, CartTotal, Alert} from "./style";
import {CartContext} from "../../Context/CartContext";

const Carrinho = () =>{
  
  const { numberFormat, confirmacao, bill, cart, handleRemoveFromCart  } = useContext(CartContext);
  return(
    <main>
    <GlobalStyle />
    <Header />
    <Container>
      <h1>Meu Carrinho</h1>
      <div className="cart">
        <CartWrapper>
          { cart.length === 0 ? <CartItem className="alert">Ainda não existem itens no carrinho</CartItem> : ''}
          {cart.map( produto => (
            <CartItem key={produto.id}>
              <Link to={'/produto/' + produto.ref} className="cart_item_title">
                <h4>{produto.nome}</h4>
              </Link>
              <h4 className="cart_item__price">
                {numberFormat(produto.preco)}
              </h4>
              <button className="remover" title="Remover Produto" onClick={()=>{handleRemoveFromCart(produto)}}>X</button>
            </CartItem> 
          ))}
          { bill > 0 ? <CartTotal><h4>Valor Total</h4><h4>{numberFormat(bill)}</h4></CartTotal>: ''}
        </CartWrapper>
      </div>
      { cart.length > 0 ? <Link to="/finalizar" className="finalizar">
        <button>Finalizar Pedido</button>
      </Link> : ''}
      { confirmacao ? <Alert> Produto removido do Carrinho. </Alert>: '' }
    </Container>
    <Footer />
    </main>
  );
}

export default Carrinho;