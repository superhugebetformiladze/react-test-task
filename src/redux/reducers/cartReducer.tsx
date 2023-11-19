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

    case 'UPDATE_QUANTITY':
      const updatedItems = state.items.map((item) => {
        if (item.product.id === action.payload.productId) {
          const newQuantity = Math.max(1, action.payload.quantity)
          return { ...item, quantity: newQuantity }
        }
        return item
      })
      return { ...state, items: updatedItems }

    case 'REMOVE_FROM_CART':
      const updatedItemsDelete = state.items.filter(
        (item) => item.product.id !== action.payload.productId
      )
      return {
        ...state,
        items: updatedItemsDelete,
      }

    case 'OPEN_MODAL':
      return { ...state, isModalOpen: true }
    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false }
    default:
      return state
  }
}

export const getTotalPrice = (state: CartState) =>
  state.items.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2)
