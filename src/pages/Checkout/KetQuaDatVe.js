import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { thongTinTaiKhoanAction } from "../../redux/actions/QuanLiNguoiDungAction";
import LoadingChildren from "../../components/Loading/LoadingChildren";

export default function KetQuaDatVe() {
    const dispatch = useDispatch()

    const { thongTinTaiKhoan } = useSelector(state => state.QuanLiNguoiDungReducer)
    useEffect(() => {
        const action = thongTinTaiKhoanAction;
        dispatch(action)
    }, [])

    const renderKetQuaDatVe = () => {
        return thongTinTaiKhoan.thongTinDatVe?.map((thongTin, index) => {
            return <div key={index}
                className=" max-w-md p-8 sm:flex sm:space-x-6 bg-gray-200 text-gray-900 rounded-md transform transition duration-500 hover:scale-105">
                <div className=" w-28 h-40  sm:mb-0 mx-auto">
                    <img src={thongTin.hinhAnh} alt='' className="object-cover object-center w-full h-full rounded bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4 w-56">
                    <div>
                        <h2 className="text-2xl font-semibold" style={{ height: '32px', overflowY: 'scroll' }}>{thongTin.tenPhim}</h2>
                        <span className="text-sm text-gray-600">Ngày đặt: {moment(thongTin.ngayDat).format('DD/M/YYYY')}</span>
                    </div>
                    <div style={{ height: '90px', overflowY: 'scroll' }}>
                        {thongTin.danhSachGhe.map((ghe, index) => {
                            return <div key={index} >
                                <h2 className="text-md">{ghe.tenHeThongRap} - {ghe.tenCumRap} - Ghế: {ghe.tenGhe}</h2>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        })
    }

    return (
        <div className="flex justify-center ">
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-6 justify-center items-center mt-3'>
                {renderKetQuaDatVe()}
            </div>
        </div>
    )
}