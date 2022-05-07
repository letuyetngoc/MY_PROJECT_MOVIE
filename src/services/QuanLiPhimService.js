import { baseService } from "./baseService";

class QuanLiPhimService extends baseService {
    constructor() {
        super()
    }
    layDanhSachBanner = () => {
        return this.get(`api/QuanLyPhim/LayDanhSachBanner`)
    }
}
const quanLiPhimService = new QuanLiPhimService()
export default quanLiPhimService