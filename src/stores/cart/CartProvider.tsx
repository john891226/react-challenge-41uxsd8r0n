import React, { useReducer } from "react";
import { ChildrenCmp } from "../../types/react";
import CartContext from "./CartContext";
import initialState from "./CartInitialState";
import reducer from "./CartReducer";

function CartProvider({ children }: ChildrenCmp) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ dispatch, state }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
