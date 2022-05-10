import React, { useEffect } from 'react'
import SlickCarouselFilm from '../../components/SlickAntd/SlickCarouselFilm'

function CarouselHome({ arrBanner }) {

    return (
        <div className='myMovie__carousel'>
            <SlickCarouselFilm arrBanner={arrBanner} />
        </div>
    )
}
export default CarouselHome