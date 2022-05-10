import { Carousel } from 'antd';
import './SlickCarouselFilm.scss'

const contentStyle = {
    class: 'center',
    height: '500px',
    color: '#fff',
    lineHeight: '500px',
    textAlign: 'center',
    autoplay: 'false'

};

export default function SlickCarouselFilm({ arrBanner }) {
    const renderFilm = () => {
        return arrBanner.map((film, index) => {
            return < div key={index} >
                <div style={{
                    ...contentStyle,
                    backgroundImage: `url(${film.hinhAnh})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat '
                }} >
                    <img style={contentStyle} src={film.hinhAnh} className='w-full opacity-0' />
                </div>
            </div >
        })
    }
    return (
        <Carousel autoplay>
            {renderFilm()}
        </Carousel >)
}