import { IntlLabel } from "../stores/intl/IntlContext";
import { Product } from "../types/products";

type P = {
  type: string;
  name: IntlLabel;
  photo: string;
  id: string;
  tags?: string;
  mininum: number;
} & (
  | {
      prices: Record<
        string,
        {
          name: IntlLabel;
          price: number;
        }[]
      >;
    }
  | { price: number }
);

export const PRODUCTS: Record<string, P> = {
  "Basic T-Shirt": {
    type: "apparel",
    id: "Basic T-Shirt",
    mininum: 10,
    name: {
      en: "Basic T-Shirt",
      es: "Camisa T Básica",
    },
    photo:
      "https://cdn11.bigcommerce.com/s-64375/images/stencil/1280x1280/products/376/5439/30_su_round_green_1153_2__79492.1417683051.jpg",
    price: 13.5,
  },
  "Woman bottle": {
    type: "drinkware",
    id: "Woman bottle",
    mininum: 20,
    name: {
      en: "Woman bottle",
      es: "Botella de mujer",
    },
    photo: "https://m.media-amazon.com/images/I/61NfI9RLjAS._SY355_.jpg",
    price: 36.5,
  },
  "Cardboard box": {
    type: "packaging",
    id: "Cardboard box",
    mininum: 1,
    name: {
      en: "Cardboard box",
      es: "Caja de cartón",
    },
    photo:
      "https://www.verpacking.com/media/image/product/39065/lg/cardboard-box-single-wall-600x400x200mm-brown.jpg",
    prices: {
      type: [
        {
          name: {
            es: "Contenedor",
            en: "Container",
          },
          price: 23.73,
        },
      ],
    },
  },
  "Unisex Short Sleeve T-Shirt": {
    type: "apparel",
    id: "Unisex Short Sleeve T-Shirt",
    mininum: 24,
    name: {
      en: "Unisex Short Sleeve T-Shirt",
      es: "Camisa de Manga Corta Unisex",
    },
    photo:
      "https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/1800DB2CD18E4FEE8D09C833570F5CAD/M10093625_4.jpg?fit=inside|540:540",
    prices: {
      color: [
        {
          name: {
            es: "Blanco",
            en: "White",
          },
          price: 2.73,
        },
        {
          name: {
            es: "Verde",
            en: "Green",
          },
          price: 16.46,
        },
      ],
      size: [
        {
          name: {
            es: "Pequeño",
            en: "Small",
          },
          price: 7.27,
        },
        {
          name: {
            es: "Mediano",
            en: "Medium",
          },
          price: 7.3,
        },
        {
          name: {
            es: "Grande",
            en: "Big",
          },
          price: 7.54,
        },
      ],
    },
  },
  "Basic Bottle": {
    type: "apparel",
    id: "Basic Bottle",
    mininum: 1,
    name: {
      en: "Basic Bottle",
      es: "Botella básica",
    },
    photo: "https://m.media-amazon.com/images/I/71t8zZuv+aL._AC_SS450_.jpg",
    prices: {
      color: [
        {
          name: {
            es: "Azul",
            en: "Blue",
          },
          price: 23.73,
        },
      ],
    },
  },
};
