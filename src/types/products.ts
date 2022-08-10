export interface ProductType {
  id: string;
  name: string;
}

export interface BasicProduct {
  name: string;
  photo: string;
  id: string;
}

export interface Product extends BasicProduct {
  type: string;
  tags?: string[];
  mininum: number;
  price:
    | number
    | Record<
        string,
        {
          name: string;
          price: number;
        }[]
      >;
}

export type CartProduct = {
  id: string;
  quantity: number;
} & (
  | {
      pack: false;
      price: number;
      product: string | BasicProduct;
    }
  | {
      pack: true;
      name: string;
      products: {
        product: string | BasicProduct;
        quantity: number;
        prices: Record<
          string,
          | {
              name: string;
              price: number;
            }
          | number
        >;
      }[];
    }
);
