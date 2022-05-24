import { history } from '../../App'
import quanLiPhimService from '../../services/QuanLiPhimService'
import { GET_ARRFILM } from '../types/layDSBannerTypes'
import { LAY_THONG_TIN_PHIM, XOA_PHIM } from '../types/QuanLiPhimTypes'
import { LayDanhSachPhimAction } from './QuanLiRapAction'

export const LayDSBannerAction = async (dispatch) => {
    try {
        const result = await quanLiPhimService.layDanhSachBanner()
        dispatch({
            type: GET_ARRFILM,
            arrFilm: result.data.content
        })
    } catch (error) {
        console.log('error', error)
    }
}
export const ThemPhimUploadHinhAction = (formData) => {
    return async (dispatch) => {
        try {
            const result = await quanLiPhimService.ThemPhimUploadHinh(formData)
            history.push('/admin/films')
            dispatch(LayDanhSachPhimAction())
            alert('Thêm phim thành công!')
        }
        catch (error) {
            console.log('error', error.response.data)
        }
    }
}
export const LayThongTinPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await quanLiPhimService.LayThongTinPhim(maPhim)
            dispatch({
                type: LAY_THONG_TIN_PHIM,
                thongTinPhim: result.data.content
            })
        }
        catch (error) {
            console.log('error', error.response.data)
        }
    }
}
export const CapNhatPhimUploadAction = (formData) => {
    return async (dispatch) => {
        try {
            const result = await quanLiPhimService.CapNhatPhimUpload(formData)
            // console.log('result', result)
            alert('Cập nhật phim thành công!')
            history.push('/admin/films')
            dispatch(LayDanhSachPhimAction)

        } catch (error) {
            console.log('error', error)
        }

    }
}
export const XoaPhimAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await quanLiPhimService.xoaPhim(id)
            dispatch(LayDanhSachPhimAction)
            alert('Xóa phim thành công!')
            console.log('result', result)
        } catch (error) {
            console.log('error', error)
        }
    }
}
