import { Carousel } from 'antd';

const contentStyle = {
    class: 'center',
    height: '500px',
    color: '#fff',
    lineHeight: '500px',
    textAlign: 'center',
    background: '#364d79',
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',

};

export default function SlickCarouselFilm() {
    return (
        <Carousel autoplay>
            <div style={{ ...contentStyle, backgroundImage: `url('https://picsum.photos/200')` }}>
                <div style={{ ...contentStyle, backgroundImage: `url('https://picsum.photos/200')` }} >
                    <img style={contentStyle} src='https://picsum.photos/200' className='w-full opacity-0' />
                </div>
            </div>
            <div style={{ ...contentStyle, backgroundImage: `url('https://picsum.photos/200')` }}>
                <div style={{ ...contentStyle, backgroundImage: `url('https://picsum.photos/200')` }} >
                    <img style={contentStyle} src='https://picsum.photos/200' className='w-full opacity-0' />
                </div>
            </div>
            <div style={{ ...contentStyle, backgroundImage: `url('https://picsum.photos/200')` }}>
                <div style={{ ...contentStyle, backgroundImage: `url('https://picsum.photos/200')` }} >
                    <img style={contentStyle} src='https://picsum.photos/200' className='w-full opacity-0' />
                </div>
            </div>
            <div style={{ ...contentStyle, backgroundImage: `url('https://picsum.photos/200')` }}>
                <div style={{ ...contentStyle, backgroundImage: `url('https://picsum.photos/200')` }} >
                    <img style={contentStyle} src='https://picsum.photos/200' className='w-full opacity-0' />
                </div>
            </div>
        </Carousel >)
}