import { ACCESS_TOKEN, USER_LOGIN } from "../../util/settings/config"
import { DANG_NHAP_ACTION } from "../types/QuanLiNguoiDungType"

let user = {}
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const stateDefault = {
    userLogin: user
}
export const QuanLiNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DANG_NHAP_ACTION: {
            state.userLogin = action.userLogin
            localStorage.setItem(USER_LOGIN, JSON.stringify(state.userLogin))
            localStorage.setItem(ACCESS_TOKEN, state.userLogin.accessToken)
            return { ...state }
        }
        default: return { ...state }
    }
}