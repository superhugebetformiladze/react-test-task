export interface CartState {
  isModalOpen: boolean
}

const initialState: CartState = {
  isModalOpen: false,
}

export const cartReducer = (state = initialState, action: any): CartState => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, isModalOpen: true }
    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false }
    default:
      return state
  }
}
