import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { quanLiDangNhap } from '../../redux/actions/QuanLiNguoiDungAction'


export default function DangNhap() {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        onSubmit: values => {
            dispatch(quanLiDangNhap(values))
        },
    })
    return (
        <form onSubmit={formik.handleSubmit} className="lg:w-1/2 xl:max-w-screen-sm" >
            <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
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
            <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
          xl:text-bold">Đăng nhập</h2>
                <div className="mt-12">
                    <div>
                        <div>
                            <div className="text-sm font-bold text-gray-700 tracking-wide">Tài khoản</div>
                            <input
                                name='taiKhoan'
                                onChange={formik.handleChange}
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập tài khoản" />
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Mật khẩu
                                </div>
                                <div>
                                    <a className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                              cursor-pointer">
                                        Quên mật khẩu?
                                    </a>
                                </div>
                            </div>
                            <input name='matKhau' type='current-password'
                                onChange={formik.handleChange}
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập mật khẩu" />
                        </div>
                        <div className="mt-10">
                            <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                      shadow-lg" type='submit'>
                                Đăng nhập
                            </button>
                        </div>
                    </div>
                    <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                        Bạn chưa có tài khoản ? <NavLink to='/dangki' className="cursor-pointer text-indigo-600 hover:text-indigo-800">Đăng kí</NavLink>
                    </div>
                </div>
            </div>
        </form >
    )
}
