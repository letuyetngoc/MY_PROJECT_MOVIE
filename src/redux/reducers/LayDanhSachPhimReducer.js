import { GET_ARRFILM_DANG_CHIEU, GET_ARRFILM_SAP_CHIEU, GET_ARRFILM_SLICK, GET_CHI_TIET_PHIM } from "../types/LayDanhSachPhimTypes"

const stateDefault = {
    arrFilm: [],
    arrFilmDangChieu: [],
    arrFilmSapChieu: [],
    filmDetail: {}
}
const LayDanhSachPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_ARRFILM_SLICK: {
            state.arrFilm = action.arrFilm
            return { ...state }
        }
        case GET_ARRFILM_DANG_CHIEU: {
            state.arrFilmDangChieu = state.arrFilm
            state.arrFilmDangChieu = state.arrFilmDangChieu.filter(film => film.dangChieu)
            return { ...state }
        }
        case GET_ARRFILM_SAP_CHIEU: {
            state.arrFilmSapChieu = state.arrFilm
            state.arrFilmSapChieu = state.arrFilmSapChieu.filter(film => film.sapChieu)
            return { ...state }
        }
        case GET_CHI_TIET_PHIM: {
            state.filmDetail = action.film
            return { ...state }
        }
        default: return { ...state }
    }
}
export default LayDanhSachPhimReducer