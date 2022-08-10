import { CartProduct } from "../types/products";
import { PRODUCTS } from "./products";

export const CART_PRODUCTS: CartProduct[] = [
  {
    id: "qweqwe",
    name: "My Christmas Pack",
    pack: true,
    quantity: 50,
    products: [
      {
        product: "Cardboard box",
        quantity: 1,
        prices: {
          type: 23.73,
        },
      },
      {
        product: "Unisex Short Sleeve T-Shirt",
        quantity: 1,
        prices: {
          color: 16.46,
          size: 7.27,
        },
      },
      {
        product: "Basic Bottle",
        quantity: 1,
        prices: {
          color: 23.73,
        },
      },
    ],
  },
  {
    id: "asdasdasd",
    pack: false,
    product: "Basic T-Shirt",
    quantity: 10,
    price: (PRODUCTS["Basic T-Shirt"] as any)?.price,
  },
  {
    id: "dfgnfsdfsdf",
    pack: false,
    product: "Woman bottle",
    quantity: 20,
    price: (PRODUCTS["Woman bottle"] as any)?.price,
  },
];
