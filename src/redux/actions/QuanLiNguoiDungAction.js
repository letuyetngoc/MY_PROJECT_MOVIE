import quanLiNguoiDung from "../../services/QuanLiNguoiDungService"
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG, THONG_TIN_TAI_KHOAN } from "../types/QuanLiNguoiDungType"
import { history } from '../../App'
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction"
import { message } from 'antd';

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
            alert(error.response.data.content)
            console.log('error', error)
        }
    }
}
export const layThongTinNguoiDungAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            dispatch(displayLoadingAction)
            const result = await quanLiNguoiDung.layThongTinNguoiDung(taiKhoan);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                });
            }
            dispatch(hideLoadingAction)
        } catch (error) {
            console.log('error', error.response.data);
        }

    }
}

export const xoaNguoiDungAction = (taiKhoan) => {
    return async () => {
        try {
            const result = await quanLiNguoiDung.xoaNguoiDung(taiKhoan)
            await message.success(`Xoá tài khoản ${taiKhoan} thành công! `, [2])

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
            await message.success('Thêm người dùng thành công!', [2])
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
            await message.success('Cập nhật thành công!', [2])
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
            await message.success('Đăng kí thành công!', [2])
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
export const thongTinTaiKhoanAction = async (dispatch) => {
    try {
        dispatch(displayLoadingAction)
        const result = await quanLiNguoiDung.thongTinTaiKhoan()
        dispatch({
            type: THONG_TIN_TAI_KHOAN,
            thongTinTaiKhoan: result.data.content
        })
        dispatch(hideLoadingAction)
    } catch (error) {
        console.log('error', error.response.data)
    }
}
// export const layDanhSachNguoiDungAction = (tuKhoa = '') => {
//     return async (dispatch) => {
//         try {
//             const result = await quanLiNguoiDung.layDanhSachNguoiDung(tuKhoa)
//             console.log('resultDS', result.data.content)
//             dispatch({
//                 type: LAY_DANH_SACH_NGUOI_DUNG,
//                 danhSachNguoiDung: result.data.content
//             })
//         } catch (error) {
//             console.log('error', error.response.data)
//         }
//     }
// }
