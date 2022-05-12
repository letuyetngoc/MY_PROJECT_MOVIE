import React from "react";
import Slider from "react-slick";
import CardFilm from "../CardFilm/CardFilm";
import './MutipleSlickFilm.scss'

import { Tabs } from 'antd';
import { GET_ARRFILM_DANG_CHIEU, GET_ARRFILM_SAP_CHIEU } from "../../redux/types/QuanLiPhimTypes";
import { useDispatch, useSelector } from "react-redux";

const { TabPane } = Tabs;

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, }}
            onClick={onClick}
        />
    );
}

const MultipleSlickFilm = ({ arrFilm }) => {
    const dispatch = useDispatch()
    const { arrFilmDangChieu, arrFilmSapChieu } = useSelector(state => state.QuanLiPhimReducer)
    const settings = {
        className: 'center',
        dots: false,
        infinite: true,
        speed: 500,
        rows: 2,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
        // autoplay: true,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                }
            }
        ]
    };
    return (
        <div className="my-4 movie__phim-slickFilm">
            <Tabs>
                <TabPane tab={
                    <p className="text-lg md:text-2xl font-medium mr-7">Tất cả phim</p>
                } key="1" >
                    <Slider {...settings}>
                        {arrFilm.map((film, index) => {
                            return <div key={index}>
                                <CardFilm film={film} />
                            </div>
                        })}
                    </Slider>
                </TabPane>
                <TabPane tab={
                    <p
                        onClick={() => dispatch({ type: GET_ARRFILM_DANG_CHIEU })}
                        className="text-lg md:text-2xl font-medium mr-7">Phim đang chiếu</p>
                } key="2" >
                    <Slider {...settings}>
                        {arrFilmDangChieu.map((film, index) => {
                            return <div key={index}>
                                <CardFilm film={film} />
                            </div>
                        })}
                    </Slider>
                </TabPane>
                <TabPane tab={
                    <p
                        onClick={() => dispatch({ type: GET_ARRFILM_SAP_CHIEU })}
                        className="text-lg md:text-2xl font-medium ">Phim sắp chiếu</p>
                } key="3">
                    <Slider {...settings}>
                        {arrFilmSapChieu.map((film, index) => {
                            return <div key={index}>
                                <CardFilm film={film} />
                            </div>
                        })}
                    </Slider>
                </TabPane>
            </Tabs>
        </div>
    )
}
export default MultipleSlickFilm