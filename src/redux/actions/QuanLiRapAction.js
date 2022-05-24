import quanLiPhimService from "../../services/QuanLiPhimService"
import quanLiRapService from "../../services/QuanLiRapService"
import { GET_ARR_CUM_RAP } from "../types/QuanLiRapTypes"
import { GET_ARRFILM_SLICK, GET_CHI_TIET_PHIM } from "../types/QuanLiPhimTypes"

export const LayDanhSachPhimAction = (tenPhim = '') => {
    return async (dispatch) => {
        try {
            const result = await quanLiPhimService.layDanhSachPhim(tenPhim)
            dispatch({
                type: GET_ARRFILM_SLICK,
                arrFilm: result.data.content
            })
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const LayDanhSachCumRapAction = async (dispatch) => {
    try {
        const result = await quanLiRapService.LayThongTinLichChieuHeThongRap()
        dispatch({
            type: GET_ARR_CUM_RAP,
            arrCumRap: result.data.content
        })
    } catch (error) {
        console.log('error', error)
    }
}
export const LayThongTinLichChieuPhim = (id) => {
    return async (dispatch) => {
        try {
            const result = await quanLiRapService.layThongTinLichChieuPhim(id)
            dispatch({
                type: GET_CHI_TIET_PHIM,
                filmDetail: result.data.content
            })
        } catch (error) {
            console.log('error', error)
        }
    }
}




