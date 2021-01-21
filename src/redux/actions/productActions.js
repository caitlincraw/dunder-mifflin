import { FETCH_PRODUCTS, ORDER_PRODUCTS_BY_PRICE } from "../types";

export const fetchProducts = () => async(dispatch) => {

    const res = await fetch('/products/all');
    const data = await res.json();
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data
    });
}
