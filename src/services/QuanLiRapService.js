import { GROUP } from "../util/settings/config";
import { baseService } from "./baseService";

class QuanLiRapService extends baseService {
    constructor() {
        super()
    }
    LayThongTinLichChieuHeThongRap = () => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP}`)
    }
    layThongTinLichChieuPhim = (id) => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
    }

}
const quanLiRapService = new QuanLiRapService()
export default quanLiRapService