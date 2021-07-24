import React from "react";
import Routes from "./routes";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>

  );
}

export default App;
