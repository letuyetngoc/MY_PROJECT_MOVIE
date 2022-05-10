import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import React from 'react';
import './CardFilm.scss'

function CardFilm({ film }) {

    return (
        <section className=" body-font mx-2 my-2 md:w-auto sm:w-4/5 ">
            <div className="group ">
                <div className=" grid grid-col-1 sm:grid-col-2 md:grid-col-3 lg:grid-col-4 gap-5 border-gray-200 rounded-xl  ">
                    <div className=" relative h-full border-2 border-gray-200 border-opacity-60 rounded-xl overflow-hidden shadow-md">
                        <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${film.hinhAnh})` }}>
                            <img className="opacity-0 h-80 h-80 w-full object-cover object-center rounded-t-xl " src={film.hinhAnh} alt="film_card" />
                            <div className="absolute top-0 left-0 w-full h-full bg-dark opacity-0 group-hover:opacity-40 transform transition duration-500 rounded-t-xl"></div>
                            <button>
                                <img className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 hover:scale-105 transform transition duration-500" src="./img/download.png" width={50} height={50} />
                            </button>
                        </div>
                        <div className="py-3 px-1 relative bg-gray-200">
                            <h1 className="title-font text-lg font-medium text-gray-900 hover:text-indigo-600 text-center">{film.tenPhim.slice(0, 20)}</h1>
                            <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 h-full w-full rounded-b-xl bg-gray-200 transform transition duration-500">
                                <NavLink to={`/chitietphim/${film.maPhim}`}>
                                    <button
                                        className="absolute bottom-2.5 left-2.5 text-center rounded-lg px-2 py-1 bg-indigo-600  text-white font-medium text-base hover:bg-indigo-700">Xem chi tiết</button>
                                </NavLink>
                                <button className="absolute bottom-2.5 right-2.5 text-center rounded-lg px-2 py-1 bg-indigo-600 text-white font-medium text-base hover:bg-indigo-700">Đặt vé</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CardFilm

