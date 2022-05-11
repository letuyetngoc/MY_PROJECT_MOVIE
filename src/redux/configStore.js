import { applyMiddleware, combineReducers } from "redux";
import { createStore } from 'redux'
import thunk from "redux-thunk";
import LayDSBannerReducer from "./reducers/LayDSBannerReducer";
import QuanLiPhimReducer from "./reducers/QuanLiPhimReducer";
import QuanLiRapReducer from "./reducers/QuanLiRapReducer";

const rootReducer = combineReducers({
    LayDSBannerReducer,
    QuanLiPhimReducer,
    QuanLiRapReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))

