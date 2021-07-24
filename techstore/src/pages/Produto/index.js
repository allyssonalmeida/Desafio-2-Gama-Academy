import React, { useEffect, useState, useContext} from 'react';
import api from "../../services/api";
import GlobalStyle from '../../globalStyle';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Container, Alert} from "./style";
import { useParams } from "react-router";
import { CartContext } from "../../Context/CartContext";

const Produto = () => {
  const { id } = useParams();
  const { numberFormat, handleAddtoCart, button, confirmacao  } = useContext(CartContext);
  const [produto, setProduto] = useState([]);
  useEffect(() => {
    async function getProduto() {
      try {
        const {data} = await api.get(`/produtos/${id}/dados.json`);
        setProduto(data);
      } catch(error){
        alert("Ocorreu um erro");
      }
    }
    getProduto();
  }, [id]);

  return(
    <main>
      <GlobalStyle />
      <Header />
      <Container>
        <img src={produto.img} alt={produto.nome} />
        <div className="dados">
          <h1>{produto.nome}</h1>
          <p>{produto.descricao}</p>
          <span>{ numberFormat(produto.preco) }</span>
          <button onClick={()=>{handleAddtoCart(produto)}} >{button}</button>
          { confirmacao ? <Alert> Produto adicionado ao Carrinho. </Alert>: '' }
        </div>
      </Container>
      <Footer />
    </main> 
  );
}

export default Produto;