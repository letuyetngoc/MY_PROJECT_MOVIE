import quanLiNguoiDung from "../../services/QuanLiNguoiDungService"
import { DANG_NHAP_ACTION } from "../types/QuanLiNguoiDungType"
import { history } from '../../App'
export const quanLiDangNhap = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await quanLiNguoiDung.dangNhap(thongTinDangNhap)
            if (result.data.statusCode == '200') {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    userLogin: result.data.content
                })
                // chuyển hướng về trang trước đó
                history.goBack()
            }
        } catch (error) {
            console.log('error', error)
        }
    }
}