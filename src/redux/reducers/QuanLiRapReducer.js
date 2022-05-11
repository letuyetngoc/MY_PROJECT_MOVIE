import { GET_CHI_TIET_PHIM } from "../types/QuanLiPhimTypes"
import { GET_ARR_CUM_RAP } from "../types/QuanLiRapTypes"

const stateDefault = {
    arrCumRap: [],
    filmDetail: {}
}
const QuanLiRapReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_ARR_CUM_RAP: {
            state.arrCumRap = action.arrCumRap
            return { ...state }
        }
        case GET_CHI_TIET_PHIM: {
            state.filmDetail = action.filmDetail
            return { ...state }
        }
        default: return { ...state }
    }
}
export default QuanLiRapReducer