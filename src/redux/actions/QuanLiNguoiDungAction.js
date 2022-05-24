import quanLiNguoiDung from "../../services/QuanLiNguoiDungService"
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "../types/QuanLiNguoiDungType"
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
                if (result.data.content.maLoaiNguoiDung === 'QuanTri') {
                    history.push('/admin')
                } else {
                    history.goBack()
                }
            }
        } catch (error) {
            console.log('error', error)
        }
    }
}
export const layThongTinNguoiDungAction = (thongTinDangNhap) => {

    return async (dispatch) => {
        try {
            const result = await quanLiNguoiDung.layThongTinNguoiDung();


            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                });
            }
            console.log('result', result)

        } catch (error) {
            console.log('error', error.response.data);
        }

    }

}
