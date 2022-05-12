import { baseService } from "./baseService";

class QuanLiNguoiDung extends baseService {
    constructor() {
        super()
    }
    dangNhap = (thongTinDangNhap) => {
        return this.post(`api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap)
    }
}
const quanLiNguoiDung = new QuanLiNguoiDung()
export default quanLiNguoiDung