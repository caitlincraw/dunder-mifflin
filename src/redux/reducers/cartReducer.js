import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from '../types';

const initialState = [];
  
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_PRODUCT_TO_CART:
            return [
                ...state,
                action.product
            ]

        case REMOVE_PRODUCT_FROM_CART:
            const cartItems = state.filter(x => x.id !== action.productId);
            return cartItems;

        default:
            return state;
    }
};
