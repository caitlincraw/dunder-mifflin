import { FETCH_PRODUCTS, ORDER_PRODUCTS_BY_PRICE } from '../types';

export const productsReducer = (state = {}, action) => {

    switch(action.type){

        case ORDER_PRODUCTS_BY_PRICE:
            return { ...state,
            sort: action.payload.sort,
            }

        case FETCH_PRODUCTS:
            return { items: action.payload };
        default:
            return state;
    }
};