import {combineReducers} from "redux";
import {ProductReducer} from "./product/ProductSlice.ts";
import {TodoReducer} from "./todo/TodoSlice.ts";

const rootReducer = combineReducers({
    product: ProductReducer,
    todo: TodoReducer,
});

export default rootReducer;