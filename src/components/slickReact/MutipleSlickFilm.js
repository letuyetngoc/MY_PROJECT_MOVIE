import React, { Component } from "react";
import Slider from "react-slick";
import CardFilm from "../CardFilm/CardFilm";
import './MutipleSlickFilm.css'

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

export default class MultipleRows extends Component {
    render() {
        const settings = {
            className: 'center',
            dots: false,
            infinite: true,
            speed: 500,
            rows: 2,
            slidesToShow: 4,
            slidesToScroll: 4,
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
            <div>
                < div className="flex justify-content-center my-4">
                    <p className="text-2xl font-medium text-gray-900 hover:text-indigo-600 cursor-pointer mr-7">Đang chiếu</p>
                    <p className="text-2xl font-medium text-gray-900 hover:text-indigo-600 cursor-pointer">Sắp chiếu</p>
                </div>
                <Slider {...settings}>
                    <div>
                        <CardFilm />
                    </div>
                    <div>
                        <CardFilm />
                    </div>
                    <div>
                        <CardFilm />
                    </div>
                    <div>
                        <CardFilm />
                    </div>
                    <div>
                        <CardFilm />
                    </div>
                    <div>
                        <CardFilm />
                    </div>
                    <div>
                        <CardFilm />
                    </div>
                    <div>
                        <CardFilm />
                    </div>
                    <div>
                        <CardFilm />
                    </div>
                    <div>
                        <CardFilm />
                    </div>
                </Slider>
            </div>
        )
    }
}