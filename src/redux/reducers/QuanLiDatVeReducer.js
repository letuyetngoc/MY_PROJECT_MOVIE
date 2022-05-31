import { CHANGE_TAB, CHUYEN_TAB, DAT_VE_HOAN_TAT, GET_DANH_SACH_GHE, SET_GHE_DANG_DAT } from "../types/QuanLiDatVeTypes"
const stateDefault = {
    danhSachGhe: [],
    thongTinPhim: {},
    arrGheDangDat: [],
    totalMoney: 0,
    tabActive: '1',
    changeTab: '1'
}
export const QuanLiDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_DANH_SACH_GHE: {
            state.danhSachGhe = action.thongTinDatVe.danhSachGhe
            state.thongTinPhim = action.thongTinDatVe.thongTinPhim
            return { ...state }
        }
        case SET_GHE_DANG_DAT: {
            let newArrGheDangDat = [...state.arrGheDangDat]
            let index = newArrGheDangDat.findIndex(ghe => ghe.maGhe === action.ghe.maGhe)

            if (index !== -1) {
                newArrGheDangDat.splice(index, 1)
            } else {
                newArrGheDangDat.push(action.ghe)
            }
            state.totalMoney = newArrGheDangDat.reduce((total, ghe) => {
                return total + ghe.giaVe
            }, 0).toLocaleString()

            return { ...state, arrGheDangDat: newArrGheDangDat }
        }
        case DAT_VE_HOAN_TAT: {
            state.arrGheDangDat = []
            state.totalMoney = 0
            return { ...state }
        }
        case CHUYEN_TAB: {
            state.changeTab = action.changeTab
            return { ...state }
        }
        case CHANGE_TAB: {
            state.changeTab = '2'
            return { ...state }
        }
        default: return { ...state }
    }
}
