import quanLiNguoiDung from "../../services/QuanLiNguoiDungService"
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "../types/QuanLiNguoiDungType"
import { history } from '../../App'
import { USER_LOGIN } from "../../util/settings/config"

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
export const layThongTinNguoiDungAction = (taiKhoan) => {

    return async (dispatch) => {
        try {
            const result = await quanLiNguoiDung.layThongTinNguoiDung(taiKhoan);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                });
            }
            // console.log('result', result)
        } catch (error) {
            console.log('error', error.response.data);
        }

    }
}

export const xoaNguoiDungAction = (taiKhoan) => {
    return async () => {
        try {
            const result = await quanLiNguoiDung.xoaNguoiDung(taiKhoan)
            alert(`Xoá tài khoản ${taiKhoan} thành công! `)
        }
        catch (error) {
            console.log('error', error.response?.data)
        }
    }
}
export const themNguoiDungAction = (thongTinNguoiDung) => {
    return async () => {
        try {
            const result = await quanLiNguoiDung.themNguoiDung(thongTinNguoiDung)
            alert('Thêm người dùng thành công!')
            history.push('/admin/users')
            // console.log('result', result)
        } catch (error) {
            // console.log('error', error.response.data)
            if (error.response.data.statusCode === 500) {
                alert(error.response.data.content)
            }
        }
    }
}
export const capNhatThongTinNguoiDungAction = (thongTinNguoiDung) => {
    return async () => {
        try {
            const result = await quanLiNguoiDung.capNhatThongTinNguoiDung(thongTinNguoiDung)
            alert('Cập nhật thành công')
            history.push('/admin/users')
        } catch (error) {
            console.log('error', error.response?.data)
        }

    }
}
export const dangKiAction = (thongTinDangKi) => {
    return async () => {
        try {
            const result = await quanLiNguoiDung.dangKi(thongTinDangKi)
            alert('Đăng kí thành công!')
            history.push('/dangnhap')
            // console.log(result)
        } catch (error) {
            if (error.response.data.statusCode === 400) {
                alert(error.response.data.content)
            }
            console.log('error', error.response?.data)
        }
    }
}
