import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'react-thunk';
import { productsReducer } from './components/reducers/productReducers';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        products: productsReducer,
    }),
    
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;