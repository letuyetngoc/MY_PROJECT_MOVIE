import { GET_ARR_CUM_RAP } from "../types/LayDanhSachCumRapTypes"

const stateDefault = {
    arrCumRap: []
}
const LayDanhSachRapReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_ARR_CUM_RAP: {
            state.arrCumRap = action.arrCumRap
            return { ...state }
        }
        default: return { ...state }
    }
}
export default LayDanhSachRapReducer