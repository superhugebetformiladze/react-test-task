import { IProduct } from '@models/ProductModel'

export interface CartState {
    items: IProduct[];
    isModalOpen: boolean;
}
  
const initialState: CartState = {
    items: [],
    isModalOpen: false,
}
  
export const cartReducer = (state = initialState, action: any): CartState => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, items: [...state.items, action.payload] };
        case 'OPEN_MODAL':
            return { ...state, isModalOpen: true };
        case 'CLOSE_MODAL':
            return { ...state, isModalOpen: false };
        default:
            return state;
    }
}
  