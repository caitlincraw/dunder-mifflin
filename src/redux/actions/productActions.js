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

const fetchProductsSuccess = (products) => ({   
    type: FETCH_PRODUCTS,
    products
})

export const addProduct = product => ({
    type: ADD_PRODUCT_TO_CART,
    product
})

export const removeProduct = product => ({
    type: REMOVE_PRODUCT_FROM_CART,
    product
})