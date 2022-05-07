import { GET_ARRFILM } from "../types/layDSBannerTypes"

const stateDefault = {
    arrFilm: [{
        "maBanner": 1,
        "maPhim": 1282,
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png"
    }]
}
const LayDSBannerReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_ARRFILM: {
            state.arrFilm = action.arrFilm
            return { ...state }
        }
        default: return { ...state }
    }
}
export default LayDSBannerReducer