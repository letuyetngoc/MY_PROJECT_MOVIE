import React, { useRef } from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { dangKiAction, quanLiDangNhap } from '../../redux/actions/QuanLiNguoiDungAction'
import { GROUP } from '../../util/settings/config'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'


export default function DangNhap() {
    const dispatch = useDispatch()
    const xacNhanMatKhau = useRef()
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: GROUP,
            hoTen: ''
        },
        onSubmit: values => {
            // console.log('values', values)
            if (xacNhanMatKhau.current.value === formik.values.matKhau) {
                dispatch(dangKiAction(values))
            } else {
                alert('Vui lòng kiểm tra lại mật khẩu!')
            }
        }
    })

    return (
        <form className="lg:w-1/2 xl:max-w-screen-sm" onSubmit={formik.handleSubmit} >
            <div className="py-4 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
                <NavLink to='/home'>
                    <div className="cursor-pointer flex items-center">
                        <div>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt=""
                            />
                        </div>
                        <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">Movie</div>
                    </div>
                </NavLink>
            </div>
            <div className="mt-2 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
          xl:text-bold">Đăng kí</h2>
                <div className="mt-6">
                    <div>
                        <div className="mb-3">
                            <input
                                onChange={formik.handleChange}
                                name='taiKhoan'
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Tài khoản" />
                        </div>
                        <div className="mb-3">
                            <input
                                onChange={formik.handleChange}
                                name='matKhau' type='password'
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Mật khẩu" />
                        </div>
                        <div className="mb-3">
                            <input
                                ref={xacNhanMatKhau}
                                // onChange={formik.handleChange}
                                name='XacNhanMatKhau' type='password'
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập lại mật khẩu" />
                        </div>
                        <div className="mb-3">
                            <input
                                onChange={formik.handleChange}
                                name='hoTen'
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Họ tên" />
                        </div>
                        <div className="mb-3">
                            <input
                                onChange={formik.handleChange}
                                name='email'
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <input
                                onChange={formik.handleChange}
                                name='soDt'
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Số điện thoại" />
                        </div>
                        <div className="mt-10">
                            <button className="bg-indigo-500 text-gray-100 p-3 w-full rounded-full tracking-wide
                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                      shadow-lg" type='submit'>
                                Đăng kí
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form >
    )
}
