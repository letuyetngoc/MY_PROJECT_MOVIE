import { useDispatch } from "react-redux"
import quanLiDatVe from "../../services/QuanLiDatVeService"
import { ThongTinDatVe } from "../../_core/models/QuanLiDatVe"
import { GET_DANH_SACH_GHE } from "../types/QuanLiDatVeTypes"

export const LayChiTietPhongVeAction = (maLichChieu) => {
    return async (dispatch) => {
        try {
            const result = await quanLiDatVe.layDanhSachPhongVe(maLichChieu)
            if (result.data.statusCode == 200) {
                dispatch({
                    type: GET_DANH_SACH_GHE,
                    thongTinDatVe: result.data.content
                })
            }
        } catch (error) {
            console.log('error', error)
        }
    }
}
export const DatVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
    return async dispatch => {
        try {
            const result = await quanLiDatVe.datVe(thongTinDatVe)
            console.log(result.data.content)
        } catch (error) {
            console.log('error', error)
        }
    }
}