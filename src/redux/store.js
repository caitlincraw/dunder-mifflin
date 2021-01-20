import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './reducers/productReducers';
import { authReducer } from './reducers/authReducer';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        products: productsReducer,
        auth: authReducer
    }),
    
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;