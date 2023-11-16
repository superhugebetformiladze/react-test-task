import { IProduct } from '@models/ProductModel'

export interface CartState {
  items: { product: IProduct; quantity: number }[]
  isModalOpen: boolean
}

const initialState: CartState = {
  items: [],
  isModalOpen: false,
}

export const cartReducer = (state = initialState, action: any): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === action.payload.id
      )

      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + action.quantity,
        }

        return { ...state, items: updatedItems }
      } else {
        return {
          ...state,
          items: [...state.items, { product: action.payload, quantity: action.quantity }],
        }
      }

    case 'OPEN_MODAL':
      return { ...state, isModalOpen: true }
    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false }
    default:
      return state
  }
}
