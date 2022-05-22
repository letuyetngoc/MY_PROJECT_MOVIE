import quanLiPhimService from '../../services/QuanLiPhimService'
import { GET_ARRFILM } from '../types/layDSBannerTypes'

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
            alert('Thêm phim thành công!')
            console.log('result', result)
        }
        catch (error) {
            console.log('error', error.response.data)
        }
    }
}
