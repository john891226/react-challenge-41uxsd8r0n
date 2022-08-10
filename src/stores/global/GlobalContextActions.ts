import { ProductType } from "../../types/products";

type SetLoading = {
  type: "SetLoading";
  payload: boolean;
};

export type GlobalActions = SetLoading;
