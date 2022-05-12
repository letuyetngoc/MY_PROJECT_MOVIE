import React from 'react'
import { useSelector } from 'react-redux'

export default function Checkout() {
    const { userLogin } = useSelector(state => state.QuanLiNguoiDungReducer)
    console.log(userLogin)
    return (
        <div className='grid grid-cols-12 min-h-screen'>
            <div className='bg-gray-200 col-span-12 sm:col-span-9 md:col-span-8 '>
                <div>dsdfdsfs</div>
            </div>
            <div className='pr-0 flex flex-col justify-between col-span-12 sm:col-span-3 md:col-span-4 shadow-2xl'>
                <div className=''>
                    <div className='m-3 text-green-600 text-center text-2xl font-medium'>
                        126đ
                    </div>
                    <hr />
                    <div className='m-3'>
                        <div>
                            <span className='bg-red-500 text-white text-sm mr-2 p-1 rounded-md'>C18</span>
                            <span className='text-base font-bold'>PHÙ THỦY TỐI THƯỢNG</span>
                        </div>
                        <p className='my-1 text-sm font-medium'>BHD Star Cineplex - Phạm Hùng</p>
                        <p className='text-sm font-medium'>13/05/2022 - 07:05 - Rạp 3</p>
                    </div>
                    <hr />
                    <div className='flex flex-row justify-between m-3'>
                        <p className='text-base font-medium'>Ghế</p>
                        <p className='text-red-500 font-medium'>0đ</p>
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
        </div>
    )
}
