import { FETCH_PRODUCTS, SORT_PRODUCTS } from '../types';

const initialState = [];
  
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return action.products;

        case SORT_PRODUCTS:

            const sortedArray = state.slice().sort((a, b) => (
                action.sortOrder === "lowest"?
                ((a.price > b.price)? 1:-1):
                action.sortOrder === "highest"?
                ((a.price < b.price)? 1:-1):
                ((a.id > b.id)? 1:-1)
            ))
            console.log("Joey", action.sortOrder)
        
            return sortedArray;

        default:
            return state;
    }
};