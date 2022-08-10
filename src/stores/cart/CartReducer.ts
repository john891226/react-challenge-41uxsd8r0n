import { CartActions } from "./CartActions";
import { CartState, ICartState } from "./CartTypes";

const reducer = (state: CartState, action: CartActions): CartState => {
  switch (action.type) {
    case "UpdateProductQuantity": {
      const i = state.cart.find(({ id }) => id == action.payload.product);

      if (!i) return state;

      i.quantity = action.payload.quantity;

      return {
        ...state,
        cart: state.cart,
      };
    }
    case "RemoveProductFromCart":
      {
        const i = state.cart.findIndex(({ id }) => id == action.payload);

        if (i == -1) return state;

        const cart = state.cart.splice(i, 1);
        return {
          ...state,
          cart,
        };
      }
      break;
    case "UpdateCartProducts":
      return { ...state, cart: action.payload };
    case "SetSelectedProductType":
      return { ...state, productCategory: action.payload };
    case "UpdateProductsTypes":
      return {
        ...state,
        productsTypes: action.payload.types,
        productsTypesLang: action.payload.locale,
      };
    default:
      return state;
  }
};

export default reducer;
