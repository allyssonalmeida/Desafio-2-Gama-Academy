import React,{ useState, useContext } from "react";
import {useHistory} from "react-router-dom";
import GlobalStyle from '../../globalStyle';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, Form, FormGroup } from "./style";
import {CartContext} from "../../Context/CartContext";

const FinalizarPedido = () => {
  const { cart, setClientes, setPedidos, setCart, pedidos } = useContext(CartContext);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const history = useHistory();

  const handleForm = (e) => {
    const cliente = {
      nome: nome,
      cpf: cpf,
      dataNascimento: dataNascimento,
      email: email,
      telefone: telefone,
      endereco: endereco,
      complemento: complemento,
      bairro: bairro,
      cidade: cidade,
      cep: cep,
    }
    e.preventDefault();
    setClientes((prevItems) =>
        [...prevItems, {
          id: parseInt(prevItems.length) + 1,
          cpf: cpf,
          nome: nome,
          dataNascimento: dataNascimento,
          email: email,
          telefone: telefone,
          endereco: endereco,
          complemento: complemento,
          bairro: bairro,
          cidade: cidade,
          cep: cep,
    }]);
    setPedidos((prevItems) =>
        [...prevItems, {
          id: parseInt(prevItems.length) + 1,
          cliente: cliente,
          pedido: cart,
    }]);
    setCart([]);
    history.push(`/pedido/${pedidos.length + 1}`);
  };

  return(
    <main>
    <GlobalStyle />
    <Header />
    <Container>
      <h1>Finalizar Compra</h1>
      <Form onSubmit={handleForm} >
        <h2>1. Informações Pessoais</h2>
        <FormGroup>
          <label htmlFor="nome">Nome Completo</label>
          <input type="text" inputMode="text" id="nome" value={nome} 
          onChange={e => setNome(e.target.value)} placeholder="João da Silva" required/>
        </FormGroup>
        <FormGroup className="w-50">
          <label htmlFor="nome">CPF</label>
          <input type="text" inputMode="text" id="cpf" value={cpf} 
          onChange={e => setCpf(e.target.value)} placeholder="123.456.789-00" required/>
        </FormGroup>
        <FormGroup className="w-50">
          <label htmlFor="nome">Data de Nascimento</label>
          <input type="date" inputMode="date" id="dataNascimento" value={dataNascimento} 
          onChange={e => setDataNascimento(e.target.value)} required/>
        </FormGroup>
        <FormGroup className="w-50">
          <label htmlFor="email">E-mail</label>
          <input type="email" inputMode="email" id="email" value={email} 
          onChange={e => setEmail(e.target.value)} placeholder="joaosilva@email.com" required/>
        </FormGroup>
        <FormGroup className="w-50">
          <label htmlFor="telefone">Telefone</label>
          <input type="phone" inputMode="phone" id="telefone" value={telefone} 
          onChange={e => setTelefone(e.target.value)} placeholder="(87) 99999-9999" required/>
        </FormGroup>
        <h2>2. Informações Adicionais</h2>
        <FormGroup>
          <label htmlFor="endereco">Endereço</label>
          <input type="text" inputMode="text" id="endereco" value={endereco} 
          onChange={e => setEndereco(e.target.value)} placeholder="Rua João Cavalcante, 224" required/>
        </FormGroup>
        <FormGroup className="w-50">
          <label htmlFor="complemento">Complemento</label>
          <input type="text" inputMode="text" id="complemento" value={complemento} 
          onChange={e => setComplemento(e.target.value)} placeholder="Apartamento 105"/>
        </FormGroup>
        <FormGroup className="w-50">
          <label htmlFor="bairro">Bairro</label>
          <input type="text" inputMode="text" id="bairro" value={bairro} 
          onChange={e => setBairro(e.target.value)} placeholder="Centro" required/>
        </FormGroup>
        <FormGroup className="w-50">
          <label htmlFor="cidade">Cidade</label>
          <input type="text" inputMode="text" id="cidade" value={cidade} 
          onChange={e => setCidade(e.target.value)} placeholder="São Tomé das Letras" required/>
        </FormGroup>
        <FormGroup className="w-50">
          <label htmlFor="cep">CEP</label>
          <input type="text" inputMode="text" id="cep" value={cep} 
          onChange={e => setCep(e.target.value)} placeholder="20123-000" required/>
        </FormGroup>
        <FormGroup>
          <button>Concluir Pedido</button>
        </FormGroup>
      </Form>
    </Container>
    <Footer />
    </main>
  );
}

export default FinalizarPedido;