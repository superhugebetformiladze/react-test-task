import { combineReducers } from 'redux';
import { productsReducer, ProductsState } from './productsReducer';
import { productReducer, ProductState } from './productReducer';

export interface RootState {
  products: ProductsState;
  product: ProductState;
}

const rootReducer = combineReducers<RootState>({
  products: productsReducer,
  product: productReducer,
});

export default rootReducer;
