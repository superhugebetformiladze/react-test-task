import { ThunkAction } from 'redux-thunk';
import { RootState } from './rootReducer';
import { Action } from 'redux';
import { fetchProducts, fetchProductById } from '@utils/axios';
import { setProducts, setProduct } from './actions';

export const fetchProductsAsync = (displayCount: number, showAll: boolean): ThunkAction<void, RootState, unknown, Action<string>> => {
    return async (dispatch) => {
        try {
            const response = await fetchProducts();
            const data = showAll ? response : (response || []).slice(0, displayCount);
            dispatch(setProducts(data));
        } catch (error) {
            console.error("Error setting products:", error);
        }
    };
};

export const fetchProductByIdAsync = (id: string): ThunkAction<void, RootState, unknown, Action<string>> => {
    return async (dispatch) => {
        try {
            const response = await fetchProductById(id);
            dispatch(setProduct(response));
        } catch (error) {
            console.error("Error setting product:", error);
        }
    };
};
