import { GROUP } from "../util/settings/config";
import { baseService } from "./baseService";

class QuanLiNguoiDung extends baseService {
    constructor() {
        super()
    }
    dangNhap = (thongTinDangNhap) => {
        return this.post(`api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap)
    }
    layThongTinNguoiDung = (taiKhoan) => {
        return this.post(`api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`);
    }
    layDanhSachNguoiDung = (tuKhoa) => {
        if (tuKhoa === '') {
            return this.get(`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP}`)
        }
        return this.get(`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP}&tuKhoa=${tuKhoa}`)
    }
    xoaNguoiDung = (taiKhoan) => {
        return this.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    }
    themNguoiDung = (thongTinNguoiDung) => {
        return this.post(`api/QuanLyNguoiDung/ThemNguoiDung`, thongTinNguoiDung)
    }
    capNhatThongTinNguoiDung = (thongTinNguoiDung) => {
        return this.post('api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', thongTinNguoiDung)
    }
    dangKi = (thongTinDangKi) => {
        return this.post('api/QuanLyNguoiDung/DangKy', thongTinDangKi)
    }
    thongTinTaiKhoan = () => {
        return this.post('api/QuanLyNguoiDung/ThongTinTaiKhoan')
    }
    capNhatThongTinNguoiDungPut = (thongTinNguoiDung) => {
        return this.put('api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', thongTinNguoiDung)
    }
}
const quanLiNguoiDung = new QuanLiNguoiDung()
export default quanLiNguoiDung