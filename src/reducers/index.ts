import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";

/**
 * the main reducer to combine application reducers
 */
export const reducers = combineReducers({
    routing: routerReducer
});
