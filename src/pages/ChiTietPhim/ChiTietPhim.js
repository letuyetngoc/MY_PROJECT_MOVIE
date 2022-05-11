import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LayThongTinLichChieuPhim } from '../../redux/actions/QuanLiRapAction';

import moment from 'moment';
import { Tabs } from 'antd';
import { Rate } from 'antd';

const { TabPane } = Tabs;


export default function ChiTietPhim(props) {

    const { filmDetail } = useSelector(state => state.QuanLiRapReducer)
    const id = props.match.params.id
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(LayThongTinLichChieuPhim(id))
    }, [])

    return (
        <div className='movie__chiTietPhim' style={{ backgroundImage: `url('${filmDetail.hinhAnh}` }}>
            <div className="movie__chiTietPhim-content">
                <div className='flex flex-wrap justify-center sm:justify-between items-center mt-28  sm:mx-10  lg:mx-28'>
                    <img className='w-72 h-96 shadow-md rounded-3xl' src={filmDetail.hinhAnh} alt='...' />
                    <div className=' w-72 sm:w-96 mt-5 text-left'>
                        <p className='text-base'>Ngày khởi chiếu: {moment(filmDetail.ngayKhoiChieu).format('DD/MM/YYYY')}</p>
                        <h3 className='text-3xl sm:text-4xl font-bold text-indigo-600 my-3'>{filmDetail.tenPhim}</h3>
                        <p className='text-base'>Nội dung: {filmDetail.moTa}</p>
                    </div>
                    <div className='clearfix hidden lg:flex lg:flex-col lg:items-center'>
                        <div className={`c100 p${filmDetail.danhGia * 10} small`}>
                            <span>{filmDetail.danhGia * 10}%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                        <Rate allowHalf disabled defaultValue={(Number(filmDetail.danhGia) / 2)} />
                    </div>
                </div>
                <div className='my-10 sm:my-20 mx-auto bg-white shadow-md rounded-xl' style={{ width: '80%' }}>
                    <Tabs tabPosition='left'>
                        {filmDetail?.heThongRapChieu?.map((rap, index) => {
                            return <TabPane tab={
                                <img src={rap.logo} width={50} height={50} className='rounded-full mr-2' alt='...' />
                            } key={index}>
                                {rap.cumRapChieu.map((cumRap, index) => {
                                    return (
                                        <div key={index} className='my-2'>
                                            <div className='flex flex-col' >
                                                <div className='flex flex-col sm:flex-row items-center'>
                                                    <img src={cumRap.hinhAnh} width={50} height={50} alt='...'
                                                        onError={(e) => (e.target.onerror = null, e.target.src = 'https://picsum.photos/200')}
                                                        className='mr-2' />
                                                    <div className='text-left'>
                                                        <p className='text-base font-bold text-gray-900'>{cumRap.tenCumRap}</p>
                                                        <p className='text-gray-900'>{cumRap.diaChi}</p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-wrap mt-2'>
                                                    {cumRap.lichChieuPhim?.slice(0, 10).map((lichChieu, index) => {
                                                        return <button key={index} className='py-1 px-2 bg-gray-200 hover:bg-gray-300 m-1 rounded'>{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</button>
                                                    })}
                                                </div>
                                            </div>
                                            <hr className='my-2' />
                                        </div>)
                                })}
                            </TabPane>
                        })}
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
