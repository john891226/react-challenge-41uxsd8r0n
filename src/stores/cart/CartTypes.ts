import { Dispatch } from "react";
import { CartProduct, ProductType } from "../../types/products";
import { Langs } from "../intl/IntlContext";
import { CartActions } from "./CartActions";

export interface Product {}

export interface CartState {
  productsTypes: ProductType[];
  productsTypesLang: Langs | null;
  productCategory: string;
  cart: CartProduct[];
}

export interface ICartContext {
  state: CartState;
  dispatch: Dispatch<CartActions>;
}

export interface ICartState {}
