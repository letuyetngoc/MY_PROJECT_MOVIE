import { GROUP } from "../util/settings/config";
import { baseService } from "./baseService";

class QuanLiPhimService extends baseService {
    constructor() {
        super()
    }
    layDanhSachBanner = () => {
        return this.get(`api/QuanLyPhim/LayDanhSachBanner`)
    }
    layDanhSachPhim = () => {
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP}`)
    }
    layDanhSachCumRap = () => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP}`)
    }
    ThemPhimUploadHinh = (formData) => {
        return this.post(`api/QuanLyPhim/ThemPhimUploadHinh`, formData)
    }
}
const quanLiPhimService = new QuanLiPhimService()
export default quanLiPhimService