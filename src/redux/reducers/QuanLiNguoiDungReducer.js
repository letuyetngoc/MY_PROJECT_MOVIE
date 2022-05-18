import { ACCESS_TOKEN, USER_LOGIN } from "../../util/settings/config"
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "../types/QuanLiNguoiDungType"

let user = {}
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const stateDefault = {
    userLogin: user,
    thongTinTaiKhoan: {}
}
export const QuanLiNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DANG_NHAP_ACTION: {
            state.userLogin = action.userLogin
            localStorage.setItem(USER_LOGIN, JSON.stringify(state.userLogin))
            localStorage.setItem(ACCESS_TOKEN, state.userLogin.accessToken)
            return { ...state }
        }
        case SET_THONG_TIN_NGUOI_DUNG: {
            state.thongTinNguoiDung = action.thongTinNguoiDung;
            return { ...state };
        }

        default: return { ...state }
    }
}


