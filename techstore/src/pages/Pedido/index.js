import React, {useContext} from "react";
import GlobalStyle from '../../globalStyle';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Container} from "./style";
import { useParams } from "react-router";
import {CartContext} from "../../Context/CartContext";

const Pedido = () =>{
  const { id } = useParams();
  const { pedidos, numberFormat } = useContext(CartContext);
  const dados = pedidos.filter(item => item.id === parseInt(id));
  return(
    <main>
      <GlobalStyle />
      <Header />
      <Container>
        <h1> Dados do Pedido </h1>
        {dados.map( pedido => (
        <div className="responsiveTable">
          <table key={pedido.id}>
            <tbody>
              <tr className="title">
                <td colSpan="3"><h2>Informações Pessoais</h2></td>
              </tr>
              <tr>
                <td><span>Cliente: </span> {pedido.cliente.nome}</td>
                <td><span>CPF: </span> {pedido.cliente.cpf}</td>
                <td><span>Data de Nascimento: </span> {pedido.cliente.dataNascimento}</td>
              </tr> 
              <tr className="title">
                <td colSpan="3"><h2>Endereço</h2></td>
              </tr>
              <tr>
                <td colSpan="2"><span>Rua: </span>{pedido.cliente.endereco}</td>
                <td><span>Complemento: </span>{pedido.cliente.complemento}</td>
              </tr>
              <tr>
                <td><span>Bairro: </span>{pedido.cliente.bairro}</td>
                <td><span>Cidade: </span>{pedido.cliente.cidade}</td>
                <td><span>CEP: </span>{pedido.cliente.cep}</td>
              </tr>
              <tr className="title">
                <td colSpan="3"><h2>Produtos</h2></td>
              </tr>
              {pedido.pedido.map(item =>(
                <tr key={item.id}>
                  <td>
                    <span>Produto: </span> {item.nome}
                  </td>
                  <td>
                    <span>Valor: </span> 
                    {numberFormat(item.preco)}
                  </td>
                </tr>
              ))}
              <tr className="total">
                <td colSpan="2">                
                  Valor Total:
                </td>
                <td>
                  {numberFormat(pedido.pedido.reduce((total, item) => total + item.preco, 0))}
                </td>
              </tr>  
            </tbody>
          </table>
        </div>
        ))}
      </Container>
      <Footer />
    </main>
  );
}

export default Pedido;