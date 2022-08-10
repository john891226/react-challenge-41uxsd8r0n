import { CartProduct, ProductType } from "../../types/products";
import { Langs } from "../intl/IntlContext";

type Add2Cart = {
  type: "Add2Cart";
  payload: any;
};

type UpdateProductsTypes = {
  type: "UpdateProductsTypes";
  payload: {
    types: ProductType[];
    locale: Langs;
  };
};

type SetSelectedProductType = {
  type: "SetSelectedProductType";
  payload: string;
};

type UpdateCartProducts = {
  type: "UpdateCartProducts";
  payload: CartProduct[];
};

type RemoveProductFromCart = {
  type: "RemoveProductFromCart";
  payload: string;
};

type UpdateProductQuantity = {
  type: "UpdateProductQuantity";
  payload: {
    product: string;
    quantity: number;
  };
};

export type CartActions =
  | Add2Cart
  | UpdateProductsTypes
  | SetSelectedProductType
  | UpdateCartProducts
  | RemoveProductFromCart
  | UpdateProductQuantity;
