import quanLiPhimService from "../../services/QuanLiPhimService"
import { GET_ARRFILM_SLICK } from "../types/LayDanhSachPhimTypes"

const LayDanhSachPhimAction = async (dispatch) => {
    try {
        const result = await quanLiPhimService.layDanhSachPhim()
        dispatch({
            type: GET_ARRFILM_SLICK,
            arrFilm: result.data.content
        })
    } catch (error) {
        console.log('error', error)
    }
}
export default LayDanhSachPhimAction