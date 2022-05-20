import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DatVeAction, LayChiTietPhongVeAction } from '../../redux/actions/QuanLiDatVeActions'
import { CloseCircleOutlined, UserOutlined } from '@ant-design/icons'
import { SET_GHE_DANG_DAT } from '../../redux/types/QuanLiDatVeTypes'
import { ThongTinDatVe } from '../../_core/models/QuanLiDatVe'
import _ from 'lodash'
import { Tabs, Menu, Dropdown, Space } from 'antd';
import { layThongTinNguoiDungAction } from '../../redux/actions/QuanLiNguoiDungAction'
import { moment } from 'moment'
import { HomeOutlined } from '@ant-design/icons';
import { history } from '../../App'
import { ACCESS_TOKEN, USER_LOGIN } from '../../util/settings/config'

function Checkout(props) {

    const { userLogin } = useSelector(state => state.QuanLiNguoiDungReducer)
    const { danhSachGhe, thongTinPhim, arrGheDangDat, totalMoney } = useSelector(state => state.QuanLiDatVeReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(LayChiTietPhongVeAction(props.match.params.id))
    }, [])

    const renderGhe = () => {
        return danhSachGhe.map((ghe, index) => {

            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVIP' : ''
            let classGheDaDat = ghe.daDat ? 'gheDaChon' : ''
            let classGheDangDat = ''
            let classGheBanDaDat = ''
            let indexGheDangDat = arrGheDangDat.findIndex(gheDangDat => gheDangDat.maGhe === ghe.maGhe)
            if (indexGheDangDat != -1) {
                classGheDangDat = 'gheDangChon'
            } else {
                classGheDangDat = ''
            }
            if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
                classGheBanDaDat = 'gheBanDaChon'
            }

            return <Fragment key={index}>
                <button
                    onClick={() => {
                        dispatch({
                            type: SET_GHE_DANG_DAT,
                            ghe: ghe
                        })
                    }}
                    disabled={ghe.daDat}
                    className={`ghe ${classGheDaDat} ${classGheVip} ${classGheBanDaDat} ${classGheDangDat} `}>
                    {ghe.daDat === true ? classGheBanDaDat !== '' ? <UserOutlined /> : <CloseCircleOutlined /> : ghe.tenGhe}
                </button>
                {(index + 1) % 16 === 0 ? <br /> : ''}</Fragment >
        })

    }
    return (
        <div className='grid grid-cols-12 min-h-screen movie__checkout'>
            <div className='bg-gray-200 col-span-12 sm:col-span-9 md:col-span-8 '>
                <div className='movie__checkout-hinhChuNhat mt-3 mx-auto'>abc</div>
                <div className='movie__checkout-hinhThang mx-auto text-2xl text-gray-900 font-bold text-center'>Màn hình</div>
                <div className=''>
                    <div>
                        {renderGhe()}
                    </div>
                </div>
                <div className='flex justify-between w-full sm:w-11/12 mx-auto my-3'>
                    <div>
                        <button className='ghe disabled'></button>
                        <p>Ghế</p>
                    </div>
                    <div>
                        <button className='ghe gheVIP'></button>
                        <p>Ghế VIP</p>
                    </div>
                    <div>
                        <button className='ghe gheDangChon'></button>
                        <p>Ghế đang đặt</p>
                    </div>
                    <div>
                        <button className='ghe gheDaChon'><CloseCircleOutlined /></button>
                        <p>Ghế đã đặt</p>
                    </div>
                    <div>
                        <button className='ghe gheBanDaChon'><UserOutlined /></button>
                        <p>Ghế bạn đã đặt</p>
                    </div>
                </div>
            </div>
            <div className='pr-0 flex flex-col justify-between col-span-12 sm:col-span-3 md:col-span-4 shadow-2xl'>
                <div className=''>
                    <div className='m-3 text-green-600 text-center text-2xl font-medium'>
                        {totalMoney}đ
                    </div>
                    <hr />
                    <div className='m-3 '>
                        <div className='text-left'>
                            <span className='bg-red-500 text-white text-sm mr-2 p-1 rounded-md'>C18</span>
                            <span className='text-base font-bold '>{thongTinPhim.tenPhim}</span>
                        </div>
                        <p className='my-1 text-sm font-medium text-left'>{thongTinPhim.tenCumRap}</p>
                        <p className='text-sm font-medium text-left'>{thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}</p>
                    </div>
                    <hr />
                    <div className='flex flex-row justify-between m-3'>
                        <p className='text-base font-medium'>Ghế:
                            {_.sortBy(arrGheDangDat, ['stt']).map((gheDaDat, index) => {
                                return <span key={index} className='mx-2'>
                                    {gheDaDat.tenGhe}
                                </span>
                            })}
                        </p>
                        <p className='text-red-500 font-medium'>{totalMoney}đ</p>
                    </div>
                    <hr />
                    <div className='m-3 text-left'>
                        <span className='text-base font-medium'>E-Mail: </span>
                        <span className='text-base '>{userLogin.email}</span>
                    </div>
                    <hr />
                    <div className='m-3 text-left'>
                        <span className='text-base font-medium'>Phone: </span>
                        <span className='text-base '>{userLogin.soDT}</span>
                    </div>
                    <hr />
                </div>
                <div className='mb-0 flex flex-col justify-end m-3'>
                    <div
                        onClick={() => {
                            const thongTinDatVe = new ThongTinDatVe()
                            thongTinDatVe.maLichChieu = props.match.params.id
                            thongTinDatVe.danhSachVe = arrGheDangDat
                            dispatch(DatVeAction(thongTinDatVe))
                        }}
                        className='rounded-md bg-indigo-600 text-center text-xl text-white py-2 font-medium hover:bg-indigo-700 cursor-pointer '>
                        ĐẶT VÉ
                    </div>
                </div>
            </div>
        </div >
    )
}

export default function (props) {
    const { userLogin } = useSelector(state => state.QuanLiNguoiDungReducer)
    const { TabPane } = Tabs;
    const menu = (
        <Menu
            items={[
                // {
                //     label: <a onClick={() => history.push('/profile')}>Thông tin tài khoản </a>,
                //     key: '0',
                // },
                {
                    label: <a onClick={() => {
                        localStorage.removeItem(USER_LOGIN)
                        localStorage.removeItem(ACCESS_TOKEN)
                        history.push('/home')
                        window.location.reload()
                    }}>Đăng xuất</a>,
                    key: '1',
                },
            ]}
        />
    );

    const operations = <div className=' mr-2 flex gap-4'>
        <Dropdown overlay={menu} trigger={['click']}>
            <a onClick={e => e.preventDefault()} className='flex flex-column items-center'>
                <div className='py-2 px-3 bg-indigo-600 hover:text-indigo-900 rounded-full text-white text-xl font-medium'>{userLogin.taiKhoan.slice(0, 1).toUpperCase()}</div>
                <Space>
                    <span className="whitespace-nowrap text-base font-medium text-gray-900 hover:text-indigo-600">
                        {userLogin.taiKhoan}
                    </span>
                </Space>
            </a>
        </Dropdown>
        <div onClick={() => history.push('/home')}>
            <HomeOutlined className='text-4xl text-indigo-600 hover:text-indigo-900 cursor-pointer' />
        </div>
    </div >

    return <div className='text-2xl font-bold'>
        <Tabs defaultActiveKey="1" tabBarExtraContent={operations} >
            <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1">
                <Checkout {...props} />
            </TabPane>
            <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
                <KetQuaDatVe />
            </TabPane>
        </Tabs>
    </div>
}
function KetQuaDatVe() {
    const dispatch = useDispatch()

    const { thongTinTaiKhoan, userLogin } = useSelector(state => state.QuanLiNguoiDungReducer)

    useEffect(() => {
        const action = layThongTinNguoiDungAction();
        dispatch(action)
    }, [])

    const renderKetQuaDatVe = () => {
        return thongTinTaiKhoan.thongTinDatVe?.map((thongTin, index) => {
            return <div key={index} className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={thongTin.hinhAnh} />
                <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">{thongTin.tenPhim}</h2>
                    <p className="text-gray-500">Giờ chiếu: {moment(thongTin.ngayDat).format('hh:mm A')}- Ngày chiếu: {moment(thongTin.ngayDat).format('dd/mm/yyyy')}</p>
                </div>
            </div>
        })
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Kết quả đặt vé</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Hãy kiểm tra thời gian và địa điểm chính xác để có một buổi xem phim vui vẻ bạn nhé!</p>
                </div>
                <div className="flex flex-wrap -m-2">
                    {renderKetQuaDatVe()}
                </div>
            </div>
        </section>
    )
}



