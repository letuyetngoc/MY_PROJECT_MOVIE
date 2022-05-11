import quanLiPhimService from '../../services/QuanLiPhimService'
import { GET_ARRFILM } from '../types/layDSBannerTypes'

const LayDSBannerAction = async (dispatch) => {
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
export default LayDSBannerAction