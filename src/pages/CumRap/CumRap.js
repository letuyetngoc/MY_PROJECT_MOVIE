import { Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LayDanhSachCumRapAction } from '../../redux/actions/QuanLiRapAction';

import { history } from '../../App'
import moment from 'moment'
import _ from 'lodash'
const { TabPane } = Tabs;
// function callback(key) {

// }

const CumRap = () => {

    const [chiTietRap, setChiTietRap] = useState()
    const dispatch = useDispatch()
    const { arrCumRap } = useSelector(state => state.QuanLiRapReducer)

    useEffect(() => {
        dispatch(LayDanhSachCumRapAction)
    }, [])

    const handleGetRapChiTiet = (cumRap) => {
        return setChiTietRap(cumRap)
    }
    return (
        <div style={{ width: '85%', margin: '0 auto' }} className='shadow-md  pt-32 pb-10'>
            <h3 className=' mb-4 text-center font-bold text-3xl text-indigo-600'>MOVIE CINEMAS</h3>
            <Tabs style={{ width: '85%', margin: '0 auto' }} defaultActiveKey="1" >
                {arrCumRap.map((rap, index) => {
                    return (
                        <TabPane tab={
                            <div className='flex items-center'>
                                <p key={index} className='font-medium text-base text-gray-900 hover:text-indigo-600'>
                                    {rap.maHeThongRap}
                                </p>
                            </div>
                        } key={index}>
                            <div className='flex flex-wrap' key={index}>
                                {rap.lstCumRap.map((cumRap, index) => {
                                    return (
                                        <p key={index}
                                            onClick={() => handleGetRapChiTiet(cumRap)}
                                            data-toggle='collapse' data-target='#demo1'
                                            className='w-full sm:w-1/2 lg:w-1/3 text-base text-gray-900 hover:text-indigo-600 cursor-pointer '
                                        >
                                            {cumRap.tenCumRap}
                                        </p>
                                    )
                                })}
                            </div>
                            <div id='demo2' className={chiTietRap ? "collapse show" : "collapse"}>
                                <h3 className='mt-5 mb-4 text-center font-bold text-3xl text-indigo-600'>THEATER</h3>
                                <p className='text-center text-2xl font-medium'>{chiTietRap && chiTietRap.tenCumRap}</p>
                                <div className='relative bg-cover bg-center bg-no-repeat mt-3 shadow-md' style={{ backgroundImage: `url(${chiTietRap && chiTietRap.hinhAnh})` }}>
                                    <img src={chiTietRap && chiTietRap.hinhAnh} className='w-full h-52 md:h-96' alt='photo_cumRap' />
                                    <div className='absolute bottom-0 bg-gray-200 h-20 w-full opacity-70 p-2'>
                                        <p className='text-gray-900'>{chiTietRap && chiTietRap.diaChi}</p>
                                        <p className='text-gray-900'><span className='text-base font-medium'>Hotline:</span> 1900 4567</p>
                                    </div>
                                </div>
                                <p className='mt-2 text-center font-bold text-2xl text-indigo-600 my-3'>DANH SÁCH PHIM</p>
                                {chiTietRap?.danhSachPhim.slice(0, 5).map((phim, index) => {
                                    return (
                                        <div className='mt-2' key={index}>
                                            <h3 className=' my-2 font-medium text-xl text-gray-900'>{phim.tenPhim}</h3>
                                            <div className='grid sm:grid-cols-3' >
                                                <div className='bg-cover bg-center bg-no-repeat w-36 sm:w-48' style={{ backgroundImage: `url(${phim.hinhAnh})` }}>
                                                    <img src={phim.hinhAnh} onError={(e) => (e.target.onerror = null, e.target.src = 'https://picsum.photos/75/75')} className='h-52 w-32 sm:h-72 sm:w-52 shadow-md opacity-0' />
                                                </div>
                                                <div className='ml-3 mt-3 sm:col-span-2'>
                                                    <p className=' font-medium text-base md:text-xl text-gray-900'>2D Phụ Đề Việt</p>
                                                    <div>
                                                        {phim.lstLichChieuTheoPhim?.slice(0, 15).map((lichChieu, index) => {
                                                            return <button
                                                                onClick={() => history.push(`/checkout/${lichChieu.maLichChieu}`)}
                                                                key={index}
                                                                className='bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-1 px-2 rounded m-1'
                                                            >{moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</button>
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <hr className='bg-gray-200' />
                                        </div>
                                    )
                                })}
                            </div>
                        </TabPane>)
                })}
            </Tabs>
        </div >)
}
export default CumRap;