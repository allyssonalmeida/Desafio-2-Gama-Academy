import {
  createContext,
  useState,
  useEffect,
} from "react";

export const CartContext = createContext({});

export const CartProvider = ({
  children
}) => {

  const numberFormat = (value) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
  }).format(value);

  const [cart, setCart] = useState([]);
  const [bill, setBill] = useState(0);
  const [confirmacao, setConfirmacao] = useState(false);
  const [button, setButton] = useState("Adicionar ao Carrinho");
  const [clientes, setClientes] = useState([]);
  const [pedidos, setPedidos] = useState([]);

  const handleAddtoCart = (prod) => {
    setButton("Adicionando...");
    setTimeout(()=>{
      setCart((prevItems) =>
        [...prevItems, {
          id: parseInt(prevItems.length) + 1,
          ref: prod.id,
          nome: prod.nome,
          preco: prod.preco
      }]);
      setButton("Adicionar ao Carrinho");
      setConfirmacao(true);
    }, 1000);
    setTimeout(()=>{
      setConfirmacao(false);
    }, 3000);  
  }

  const handleRemoveFromCart = (prod) =>{
    const newCart = cart.filter(item => item.id !== prod.id );
    setTimeout(()=>{
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(newCart));
      setConfirmacao(true);
    }, 1000);
    setTimeout(()=>{
      setConfirmacao(false);
    }, 3000);
  }

  useEffect(()=>{
    if(clientes.length > 0){
      localStorage.setItem('clientes', JSON.stringify(clientes));
    }
  }, [clientes]);

  useEffect(()=>{
    if(pedidos.length > 0){
      localStorage.setItem('pedidos', JSON.stringify(pedidos));
    }
  }, [pedidos]);

  useEffect(() => { //Armazenar carrinho no LocalStorage
    if(cart.length > 0){
      localStorage.setItem('cart',JSON.stringify(cart));
      let total = cart.reduce((total, item) => total + item.preco, 0);
      setBill(total);
    }else{ // Se o carrinho estiver vazio, o valor total será 0
      localStorage.removeItem('cart');
      setBill(0);
    }
  }, [cart]);

  useEffect(()=>{ // Verifica se existem dados no LocalStorage referentes ao carrinho
    const carrinho = JSON.parse(localStorage.getItem('cart'));
    if(carrinho && carrinho.length > 0){
      let total = carrinho.reduce((total, item) => total + item.preco, 0);
      setBill(total);
      setCart(carrinho);  
    }
    const pedidos = JSON.parse(localStorage.getItem('pedidos'));
    if(pedidos && pedidos.length > 0){
      setPedidos(pedidos);
    }
    const clientes = JSON.parse(localStorage.getItem('clientes'));
    if(clientes && clientes.length > 0){
      setClientes(clientes);
    }
  }, []);

  return ( 
    <CartContext.Provider value = {
      {
        numberFormat,
        cart,
        setCart,
        handleAddtoCart,
        handleRemoveFromCart,
        bill,
        confirmacao,
        button,
        setClientes,
        clientes,
        pedidos,
        setPedidos,
      }
    } > {
      children
    } 
    </CartContext.Provider>
  )
};