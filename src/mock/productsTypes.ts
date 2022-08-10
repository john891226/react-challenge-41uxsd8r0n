import { IntlLabel } from "../stores/intl/IntlContext";
import { ProductType } from "../types/products";

type PT = "packaging" | "drinkware" | "apparel" | "notebooks" | "backpacks";

interface P {
  id: PT;
  labels: IntlLabel;
}

export const PRODUCTS_TYPES: P[] = [
  {
    id: "packaging",
    labels: {
      en: "Packaging",
      es: "Embalaje",
    },
  },
  {
    id: "drinkware",
    labels: {
      en: "Drinkware",
      es: "Vasos",
    },
  },
  {
    id: "apparel",
    labels: {
      en: "Apparel",
      es: "Apariencia",
    },
  },
  {
    id: "notebooks",
    labels: {
      en: "Notebooks",
      es: "Laptops",
    },
  },
  {
    id: "backpacks",
    labels: {
      en: "Backpacks",
      es: "Mochilas",
    },
  },
];
