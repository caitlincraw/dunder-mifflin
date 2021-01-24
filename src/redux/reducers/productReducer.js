import { FETCH_PRODUCTS, ORDER_PRODUCTS_BY_PRICE } from '../types';

const initialState = [];
  
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return action.products;

        case ORDER_PRODUCTS_BY_PRICE:
            return {
                ...state,
                sort: action.payload.sort
            }

        default:
            return state;
    }
};