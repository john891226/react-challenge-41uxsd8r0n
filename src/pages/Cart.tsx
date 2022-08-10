import React from "react";
import CartContainer from "../containers/Cart/CartContainer";

import CartProvider from "../stores/cart/CartProvider";

function Cart() {
  return (
    <CartProvider>
      <CartContainer />
    </CartProvider>
  );
}

export default Cart;
