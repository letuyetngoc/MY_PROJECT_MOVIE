import { Carousel } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LayDSBannerAction from '../../redux/actions/LayDSBannerAction';

const contentStyle = {
    class: 'center',
    height: '500px',
    color: '#fff',
    lineHeight: '500px',
    textAlign: 'center',
    autoplay: 'false'

};

export default function SlickCarouselFilm() {

    const { arrFilm } = useSelector(state => state.LayDSBannerReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(LayDSBannerAction)
    }, [])

    const renderFilm = () => {
        return arrFilm.map((film, index) => {
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