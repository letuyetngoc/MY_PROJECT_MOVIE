import quanLiPhimService from "../../services/QuanLiPhimService"
import { GET_ARR_CUM_RAP } from "../types/LayDanhSachCumRapTypes"

const LayDanhSachCumRapAction = async (dispatch) => {
    try {
        const result = await quanLiPhimService.layDanhSachCumRap()
        dispatch({
            type: GET_ARR_CUM_RAP,
            arrCumRap: result.data.content
        })
    } catch (error) {
        console.log('error', error)
    }
}
export default LayDanhSachCumRapAction