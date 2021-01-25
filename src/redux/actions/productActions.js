import { FETCH_PRODUCTS, ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "../types";
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

export const addProductDatabase = () => dispatch => {
    axios({
        method: 'POST',
        withCredentials: true,
        url: `${getBackendUrl()}/cart/addItem/:userId/:prodId`,
    })
    .then((res) => {
        dispatch(addProductDatabaseSuccess(res.data))
    })
}

export const removeProductDatabase = () => dispatch => {
    axios({
        method: 'DELETE',
        withCredentials: true,
        url: `${getBackendUrl()}/cart/deleteItem/:cartId`,
    })
    .then((res) => {
        dispatch(removeProductDatabaseSuccess(res.data))
    })
}

const fetchProductsSuccess = (products) => ({   
    type: FETCH_PRODUCTS,
    products
})

const addProductDatabaseSuccess = (cartItem) => ({
    type: ADD_PRODUCT_TO_CART,
    cartItem
})

const removeProductDatabaseSuccess = (cartItem) => ({
    type: REMOVE_PRODUCT_FROM_CART,
    cartItem
})

export const addProduct = product => ({
    type: ADD_PRODUCT_TO_CART,
    product
})

export const removeProduct = (items, product) => (dispatch) => {
    const cartItems = items.slice().filter(
        x => x.id !== product.id
    );

    dispatch({
        type: REMOVE_PRODUCT_FROM_CART,
        payload: { cartItems }
    });
    
    localStorage.setItem(JSON.stringify(cartItems));
}
