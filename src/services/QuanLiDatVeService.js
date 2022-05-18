import { ThongTinDatVe } from "../_core/models/QuanLiDatVe";
import { baseService } from "./baseService";

class QuanLiDatVe extends baseService {
    constructor() {
        super()
    }
    layDanhSachPhongVe = (maLichChieu) => {
        return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }
    datVe = (thongTinDatVe = new ThongTinDatVe()) => {
        return this.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe)
    }

}
const quanLiDatVe = new QuanLiDatVe()
export default quanLiDatVe