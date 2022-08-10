import { useContext, useEffect, useMemo } from "react";
import { IntlContext } from "react-intl";
import productsService from "../services/products.service";
import { useCartContext } from "../stores/cart/CartContext";
import { useGlobalContext } from "../stores/global/GlobalContext";

import { useCurrentLocale } from "./intl";

export const useLoadProducts = () => {
  const locale = useCurrentLocale();
  const cartStore = useCartContext();
  const globalStore = useGlobalContext();
  const intlStore = useContext(IntlContext);

  async function loadProductsTypes() {
    const productsTypes = await productsService.getProductsTypes(locale);
    cartStore.dispatch({
      type: "UpdateProductsTypes",
      payload: {
        types: productsTypes,
        locale,
      },
    });
  }

  async function loadCartProducts() {
    const products = await productsService.getCart(locale);
    console.log(products);
    cartStore.dispatch({
      type: "UpdateCartProducts",
      payload: products,
    });
  }

  return {
    async loadProductsTypes() {
      if (cartStore.state.productsTypesLang) return;

      await loadProductsTypes();
    },

    async loadCartProducts() {
      if (!cartStore.state.productsTypesLang) return;

      await loadCartProducts();
    },

    async getRelatedProducts(page: number = 1, page_size: number = 5) {
      return await productsService.relatedProducts(
        locale,
        cartStore.state.cart.map(({ id }) => id),
        page,
        page_size
      );
    },
  };
};
