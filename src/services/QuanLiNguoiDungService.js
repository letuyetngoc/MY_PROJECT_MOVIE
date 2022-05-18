import { baseService } from "./baseService";

class QuanLiNguoiDung extends baseService {
    constructor() {
        super()
    }
    dangNhap = (thongTinDangNhap) => {
        return this.post(`api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap)
    }
    layThongTinNguoiDung = () => {
        return this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan');
    }
}
const quanLiNguoiDung = new QuanLiNguoiDung()
export default quanLiNguoiDung