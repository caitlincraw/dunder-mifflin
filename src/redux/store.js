import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { productReducer } from './reducers/productReducer';
import { authReducer } from './reducers/authReducer';
import { cartReducer } from './reducers/cartReducer';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        products: productReducer,
        auth: authReducer,
        cart: cartReducer
    }),
    
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;