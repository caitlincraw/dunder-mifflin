import { FETCH_PRODUCTS } from '../types';

const initialState = [];
  
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return action.products;

        default:
            return state;
    }
};