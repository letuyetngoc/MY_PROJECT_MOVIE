import { GROUP } from "../util/settings/config";
import { baseService } from "./baseService";

class QuanLiPhimService extends baseService {
    constructor() {
        super()
    }
    layDanhSachBanner = () => {
        return this.get(`api/QuanLyPhim/LayDanhSachBanner`)
    }
    layDanhSachPhim = (tenPhim = '') => {
        if (tenPhim === '') {
            return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP}`)
        }
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP}&tenPhim=${tenPhim}`)
    }
    layDanhSachCumRap = () => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP}`)
    }
    ThemPhimUploadHinh = (formData) => {
        return this.post(`api/QuanLyPhim/ThemPhimUploadHinh`, formData)
    }
    LayThongTinPhim = (maPhim) => {
        return this.get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    }
    CapNhatPhimUpload = (formData) => {
        return this.post(`api/QuanLyPhim/CapNhatPhimUpload`, formData)
    }
    xoaPhim = (id) => {
        return this.delete(`api/QuanLyPhim/XoaPhim?MaPhim=${id}`)
    }
}
const quanLiPhimService = new QuanLiPhimService()
export default quanLiPhimService