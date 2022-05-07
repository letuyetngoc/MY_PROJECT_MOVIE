import { applyMiddleware, combineReducers } from "redux";
import { createStore } from 'redux'
import thunk from "redux-thunk";
import LayDSBannerReducer from "./reducers/LayDSBannerReducer";

const rootReducer = combineReducers({
    LayDSBannerReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk))

