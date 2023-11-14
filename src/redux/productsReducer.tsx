import { IProduct } from '@models/ProductModel';

export interface ProductsState {
  data: IProduct[]
}

const initialState: ProductsState = {
  data: [],
};

export const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
