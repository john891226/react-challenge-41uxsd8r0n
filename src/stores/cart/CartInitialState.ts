import { CartState, ICartState } from "./CartTypes";

const initialState: CartState = {
  productsTypes: [],
  productsTypesLang: null,
  productCategory: "*",
  cart: [],
};

export default initialState;
