import { FETCH_PRODUCTS, ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, ORDER_PRODUCTS_BY_PRICE } from "../types";
import axios from 'axios';
import { getBackendUrl } from '../../api';

export const fetchProducts = () => dispatch => {
    axios({
        method: 'GET',
        withCredentials: true,
        url: `${getBackendUrl()}/products/all`,
    })
    .then((res) => {
        dispatch(fetchProductsSuccess(res.data))
    })      
}

const fetchProductsSuccess = (products) => ({   
    type: FETCH_PRODUCTS,
    products
})

export const addProduct = product => ({
    type: ADD_PRODUCT_TO_CART,
    product
});

export const removeProduct = product => ({
    type: REMOVE_PRODUCT_FROM_CART,
    product
});

export const sortProducts = (products, sort) => (dispatch) => {
    
    if(sort === "") {
        sortProducts.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else {
        sortProducts.sort((a, b) => (
            sort === "lowestprice" ? 
            a.price > b.price ? 1: -1
            :
            a.price > b.price ? -1: 1
        ));
    }

    dispatch({ 
        type: ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            products
        }
    });
};