import { FETCH_PRODUCTS, ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, SORT_PRODUCTS } from "../types";
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

// export const addProductDatabase = () => dispatch => {
//     axios({
//         method: 'POST',
//         withCredentials: true,
//         url: `${getBackendUrl()}/cart/addItem/:userId/:prodId`,
//     })
//     .then((res) => {
//         dispatch(addProductDatabaseSuccess(res.data))
//     })
// }

// export const removeProductDatabase = () => dispatch => {
//     axios({
//         method: 'DELETE',
//         withCredentials: true,
//         url: `${getBackendUrl()}/cart/deleteItem/:cartId`,
//     })
//     .then((res) => {
//         dispatch(removeProductDatabaseSuccess(res.data))
//     })
// }

const fetchProductsSuccess = (products) => ({   
    type: FETCH_PRODUCTS,
    products
})

// const addProductDatabaseSuccess = (cartItem) => ({
//     type: ADD_PRODUCT_TO_CART,
//     cartItem
// })

// const removeProductDatabaseSuccess = (cartItem) => ({
//     type: REMOVE_PRODUCT_FROM_CART,
//     cartItem
// })

export const addProduct = (product) => {
    const newId = `${product.id}_${Math.random().toString(16).slice(2)}`;

    return {
        type: ADD_PRODUCT_TO_CART,
        product: {
            ...product,
            id: newId
        }
    }
}

export const removeProduct = (productId) => ({
 
        type: REMOVE_PRODUCT_FROM_CART,
        productId
    
})

export const sortProducts = (sortOrder) => ({

    type: SORT_PRODUCTS,
    sortOrder

})   

