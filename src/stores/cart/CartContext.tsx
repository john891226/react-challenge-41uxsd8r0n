import React, { createContext, useContext } from "react";

import initialState from "./CartInitialState";
import { ICartContext } from "./CartTypes";

export const useCartContext = () => useContext(CartContext);

const CartContext = createContext<ICartContext>({
  state: initialState,
  dispatch: () => {},
});

export default CartContext;
