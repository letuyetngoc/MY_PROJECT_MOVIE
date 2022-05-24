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
    LayThongTinHeThongRap = () => {
        return this.get('api/QuanLyRap/LayThongTinHeThongRap')
    }
    LayThongTinCumRapTheoHeThong = (maHeThongRap) => {
        return this.get(`api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
    }

}
const quanLiRapService = new QuanLiRapService()
export default quanLiRapService