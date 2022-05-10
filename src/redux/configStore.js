import { applyMiddleware, combineReducers } from "redux";
import { createStore } from 'redux'
import thunk from "redux-thunk";
import LayDanhSachRapReducer from "./reducers/LayDanhSachCumRapReducer";
import LayDanhSachPhimReducer from "./reducers/LayDanhSachPhimReducer";
import LayDSBannerReducer from "./reducers/LayDSBannerReducer";

const rootReducer = combineReducers({
    LayDSBannerReducer,
    LayDanhSachPhimReducer,
    LayDanhSachRapReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk))

