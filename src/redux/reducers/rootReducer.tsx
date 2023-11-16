import { combineReducers } from 'redux'
import { productsReducer, ProductsState } from './productsReducer'
import { productReducer, ProductState } from './productReducer'
import { counterReducer, CounterState} from './counterReducer'
import { cartReducer, CartState} from './cartReducer'

export interface RootState {
  products: ProductsState
  product: ProductState
  counter: CounterState
  cart: CartState
}

const rootReducer = combineReducers<RootState>({
  products: productsReducer,
  product: productReducer,
  counter: counterReducer,
  cart: cartReducer,
})

export default rootReducer
