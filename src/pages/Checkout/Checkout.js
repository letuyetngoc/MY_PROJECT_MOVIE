import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LayChiTietPhongVeAction } from '../../redux/actions/QuanLiDatVeActions'
import { CloseCircleOutlined } from '@ant-design/icons'
import { SET_GHE_DANG_DAT } from '../../redux/types/QuanLiDatVeTypes'
import _ from 'lodash'

export default function Checkout(props) {

    const { userLogin } = useSelector(state => state.QuanLiNguoiDungReducer)
    const { danhSachGhe, thongTinPhim, arrGheDangDat, totalMoney } = useSelector(state => state.QuanLiDatVeReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(LayChiTietPhongVeAction(props.match.params.id))
    }, [])

    const renderGhe = () => {
        return danhSachGhe.map((ghe, index) => {

            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVIP' : ''
            let classGheDaDat = ghe.daDat === true ? 'gheDaChon' : ''
            let classGheDangDat = ''
            let indexGheDangDat = arrGheDangDat.findIndex(gheDangDat => gheDangDat.maGhe === ghe.maGhe)
            if (indexGheDangDat != -1) {
                classGheDangDat = 'gheDangChon'
            } else {
                classGheDaDat = ''
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
                    className={`ghe ${classGheDaDat} ${classGheVip} ${classGheDangDat}`}>
                    {ghe.daDat === true ? <CloseCircleOutlined /> : ghe.tenGhe}
                </button>
                {(index + 1) % 16 === 0 ? <br /> : ''}</Fragment >
        })

    }
    return (
        <div className='grid grid-cols-12 min-h-screen movie__checkout'>
            <div className='bg-gray-200 col-span-12 sm:col-span-9 md:col-span-8 '>
                <div className='movie__checkout-hinhChuNhat mt-3 mx-auto'>ffdfds</div>
                <div className='movie__checkout-hinhThang mx-auto text-2xl text-gray-900 font-bold text-center'>Màn hình</div>
                <div className='checkout_DSGhe'>
                    {renderGhe()}
                </div>
            </div>
            <div className='pr-0 flex flex-col justify-between col-span-12 sm:col-span-3 md:col-span-4 shadow-2xl'>
                <div className=''>
                    <div className='m-3 text-green-600 text-center text-2xl font-medium'>
                        {totalMoney}đ
                    </div>
                    <hr />
                    <div className='m-3'>
                        <div>
                            <span className='bg-red-500 text-white text-sm mr-2 p-1 rounded-md'>C18</span>
                            <span className='text-base font-bold'>{thongTinPhim.tenPhim}</span>
                        </div>
                        <p className='my-1 text-sm font-medium'>{thongTinPhim.tenCumRap}</p>
                        <p className='text-sm font-medium'>{thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}</p>
                    </div>
                    <hr />
                    <div className='flex flex-row justify-between m-3'>
                        <p className='text-base font-medium'>Ghế:
                            {_.sortBy(arrGheDangDat, ['stt']).map((gheDaDat, index) => {
                                // if (index >= '6') {
                                //     alert('Bạn chỉ được đặt tối đa 6 ghế!')
                                // }
                                return <span key={index} className='mx-2'>
                                    {gheDaDat.tenGhe}
                                </span>
                            })}
                        </p>
                        <p className='text-red-500 font-medium'>{totalMoney}đ</p>
                    </div>
                    <hr />
                    <div className='m-3'>
                        <span className='text-base font-medium'>E-Mail: </span>
                        <span className='text-base '>{userLogin.email}</span>
                    </div>
                    <hr />
                    <div className='m-3'>
                        <span className='text-base font-medium'>Phone: </span>
                        <span className='text-base '>{userLogin.soDT}</span>
                    </div>
                    <hr />
                </div>
                <div className='mb-0 flex flex-col justify-end m-3'>
                    <div className='rounded-md bg-indigo-600 text-center text-xl text-white py-2 font-medium hover:bg-indigo-700 cursor-pointer '>
                        ĐẶT VÉ
                    </div>
                </div>
            </div>
        </div >
    )
}
