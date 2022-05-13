import { applyMiddleware, combineReducers } from "redux";
import { createStore } from 'redux'
import thunk from "redux-thunk";
import LayDSBannerReducer from "./reducers/LayDSBannerReducer";
import { QuanLiDatVeReducer } from "./reducers/QuanLiDatVeReducer";
import { QuanLiNguoiDungReducer } from "./reducers/QuanLiNguoiDungReducer";
import QuanLiPhimReducer from "./reducers/QuanLiPhimReducer";
import QuanLiRapReducer from "./reducers/QuanLiRapReducer";

const rootReducer = combineReducers({
    LayDSBannerReducer,
    QuanLiPhimReducer,
    QuanLiRapReducer,
    QuanLiNguoiDungReducer,
    QuanLiDatVeReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk))

