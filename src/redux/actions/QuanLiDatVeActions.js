import quanLiDatVe from "../../services/QuanLiDatVeService"
import { ThongTinDatVe } from "../../_core/models/QuanLiDatVe"
import { CHANGE_TAB, DAT_VE_HOAN_TAT, GET_DANH_SACH_GHE } from "../types/QuanLiDatVeTypes"
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction"
import { message } from 'antd';

export const LayChiTietPhongVeAction = (maLichChieu) => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction)
            const result = await quanLiDatVe.layDanhSachPhongVe(maLichChieu)
            if (result.data.statusCode == 200) {
                dispatch({
                    type: GET_DANH_SACH_GHE,
                    thongTinDatVe: result.data.content
                })
            }
            dispatch(hideLoadingAction)
        } catch (error) {
            console.log('error', error)
        }
    }
}
export const DatVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
    return async dispatch => {
        try {
            dispatch(displayLoadingAction)
            const result = await quanLiDatVe.datVe(thongTinDatVe)
            await dispatch(LayChiTietPhongVeAction(thongTinDatVe.maLichChieu))
            await dispatch({ type: DAT_VE_HOAN_TAT })
            await dispatch(hideLoadingAction)
            await message.success('Đặt vé thành công!', [2])
            dispatch({ type: CHANGE_TAB })
        } catch (error) {
            console.log('error', error)
        }
    }
}