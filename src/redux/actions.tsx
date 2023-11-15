import { IProduct } from "@models/ProductModel";

export const setProducts = (products: IProduct) => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};

export const setProduct = (product: IProduct) => {
  return {
    type: "SET_PRODUCT",
    payload: product,
  };
};
