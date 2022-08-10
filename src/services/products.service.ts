import { KeyboardReturnOutlined } from "@mui/icons-material";
import { ppid } from "process";
import { IProductService } from "../interfaces/product.interface";
import { CART_PRODUCTS } from "../mock/cartProducts";
import { PRODUCTS } from "../mock/products";
import { PRODUCTS_TYPES } from "../mock/productsTypes";
import { Langs } from "../stores/intl/IntlContext";
import { Page } from "../types/pagination";
import {
  BasicProduct,
  CartProduct,
  Product,
  ProductType,
} from "../types/products";

function translateProduct(lang: Langs, p: string): BasicProduct {
  return {
    id: p,
    name: PRODUCTS[p]?.name?.[lang],
    photo: PRODUCTS[p]?.photo,
  };
}

export class ProductsService implements IProductService {
  async relatedProducts(
    lang: Langs,
    currentProducts: string[],
    page: number = 1,
    page_size: number = 5
  ): Promise<Page<Product>> {
    return {
      page: 1,
      page_size: 5,
      total: 5,
      data: Object.values(PRODUCTS)
        .slice(0, 4)
        .reverse()
        .map(({ id, mininum, name, photo, type, ...pr }) => {
          const simple = "price" in pr;
          return {
            id,
            mininum,
            name: name?.[lang],
            photo,
            type,
            price:
              "price" in pr
                ? pr.price
                : (function (prices: any) {
                    const res: any = {};
                    for (const opt in prices) {
                      res[opt] = prices[opt].map((price: any) => ({
                        price: price.price,
                        name: price.name[lang],
                      }));
                    }
                    return res;
                  })(pr.prices),
          };
        }),
    };
  }

  async getCart(lang: Langs): Promise<CartProduct[]> {
    return CART_PRODUCTS.map((p) => {
      if (p.pack) {
        return {
          ...p,
          products: p.products.map((pp) => {
            const res = {
              ...pp,
              product:
                typeof pp.product == "string"
                  ? translateProduct(lang, pp.product)
                  : pp.product,
            };
            const product = PRODUCTS[pp.product as string];

            if (pp.prices) {
              for (const price in pp.prices) {
                const pr = pp.prices[price];
                if (typeof pr == "object") continue;
                if (!("prices" in product)) continue;

                if (!product.prices[price]) continue;
                pp.prices[price] = {
                  price: pr,
                  name:
                    product.prices[price].find(
                      ({ price: pprice }) => pprice === pr
                    )?.name?.[lang] ?? "-",
                };
              }
            }
            return res;
          }),
        };
      } else
        return {
          ...p,
          product:
            typeof p.product == "string"
              ? translateProduct(lang, p.product)
              : p.product,
        };
    });
  }

  async getProductsTypes(lang: Langs): Promise<ProductType[]> {
    //Only for emulate request time
    await new Promise((r) => {
      setTimeout(() => {
        r(1);
      }, 600);
    });
    return PRODUCTS_TYPES.map(({ id, labels }) => ({
      id,
      name: labels[lang] ?? labels.en,
    }));
  }
}

const productsService = new ProductsService();

export default productsService;
