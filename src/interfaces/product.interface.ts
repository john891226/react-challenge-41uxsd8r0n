import { Langs } from "../stores/intl/IntlContext";
import { Page } from "../types/pagination";
import { CartProduct, Product, ProductType } from "../types/products";

export interface IProductService {
  getProductsTypes(lang: Langs): Promise<ProductType[]>;

  getCart(lang: Langs): Promise<CartProduct[]>;

  relatedProducts(
    lang: Langs,
    currentProducts: string[],
    page: number,
    page_size: number
  ): Promise<Page<Product>>;
}
