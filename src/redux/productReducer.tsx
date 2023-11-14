import { IProduct } from '@models/ProductModel';

export interface ProductState {
    data: IProduct | null;
}

const initialState: ProductState = {
    data: null,
};

export const productReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_PRODUCT':
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};
