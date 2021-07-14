import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartreducers";
import { productdetailReducer, productlistReducer } from "./reducers/productreducers";


const reducer=combineReducers({
    listproducts:productlistReducer,
    productdetails:productdetailReducer,
    cart:cartReducer
})
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store=createStore(
    reducer,

    composeEnhancer(applyMiddleware(thunk))
)
export default store;
