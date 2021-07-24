import React, { useEffect, useState, useContext} from 'react';
import { Link } from "react-router-dom";
import api from "../../services/api";
import GlobalStyle from '../../globalStyle';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { HomeContainer, ProdutoContainer, Produto, Banner } from "./style";
import BannerImg from "../../assets/banner.png";
import SectionTitle from "../../components/SectionTitle";
import Newsletter from "../../components/Newsletter";
import {CartContext} from "../../Context/CartContext";

const Home = () => {
  const { numberFormat } = useContext(CartContext);
  const [produtos, setProdutos] = useState([]);
  useEffect( () => {
    api
    .get("/produtos.json")
    .then((response) => setProdutos(response.data))
    .catch((err) => {
      console.error("Ocorreu um erro" + err);
    });
  }, []);

  return(
    <main>
      <GlobalStyle />
      <Header />
      <HomeContainer>
        <Banner>
          <img src={BannerImg} alt="Banner" />
        </Banner>
        <SectionTitle title="Produtos em Destaque" />
        <ProdutoContainer>
          {produtos.map( prod => (
          <Produto key={prod.id}>
            <Link to={'/produto/' + prod.id} >
              <img className="produto__img" src={prod.img} alt={prod.nome} />
            </Link>
            <Link to={'/produto/' + prod.id} >
            <h4 className="produto__titulo">{prod.nome}</h4>
            </Link>
            <h4 className="produto__preco">
              {numberFormat(prod.preco)}
            </h4>
          </Produto> 
          ))}
        </ProdutoContainer>
        <Newsletter />
      </HomeContainer>
      <Footer />
    </main>
  )
}

export default Home;
