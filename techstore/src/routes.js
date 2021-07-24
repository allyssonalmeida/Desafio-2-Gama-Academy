import React from "react";
import { Switch, Route,  BrowserRouter,  } from "react-router-dom";
import Home from "./pages/Home";
import Produto from "./pages/Produto";
import Carrinho from "./pages/Carrinho";
import FinalizarPedido from "./pages/FinalizarPedido";
import Pedidos from "./pages/Pedidos";
import Pedido from "./pages/Pedido";

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/produto/:id" component={Produto} />
        <Route path="/carrinho" component={Carrinho} />
        <Route path="/finalizar" component={FinalizarPedido} />
        <Route path="/pedidos" exact component={Pedidos} />
        <Route path="/pedido/:id" component={Pedido} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;