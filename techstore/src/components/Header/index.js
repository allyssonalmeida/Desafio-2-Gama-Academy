import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {HeaderContainer} from "./style";
import Logo from "../../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import {CartContext} from "../../Context/CartContext";

const Header = () =>{
  const {bill} = useContext(CartContext);
  const { numberFormat } = useContext(CartContext);
  return(
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
      <nav>
        <Link to="/">Produtos</Link>
        <Link to="/pedidos">Pedidos</Link>
        <Link to="/carrinho" className="cart"><span> {numberFormat(bill)} </span> <FaShoppingCart /> </Link>
      </nav>
    </HeaderContainer>
  );
}

export default Header;