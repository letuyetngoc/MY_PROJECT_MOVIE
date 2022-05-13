import { baseService } from "./baseService";

class QuanLiDatVe extends baseService {
    constructor() {
        super()
    }
    layDanhSachPhongVe = (maLichChieu) => {
        return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }

}
const quanLiDatVe = new QuanLiDatVe()
export default quanLiDatVe