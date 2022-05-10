import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MultipleSlickFilm from '../../components/slickReact/MutipleSlickFilm'
import LayDanhSachPhimAction from '../../redux/actions/LayDanhSachPhimAction'
import LayDSBannerAction from '../../redux/actions/LayDSBannerAction'
import CarouselHome from '../../templates/layout/CarouselHome'

export default function Home() {
    const dispatch = useDispatch()

    const { arrFilm } = useSelector(state => state.LayDanhSachPhimReducer)

    useEffect(() => {
        dispatch(LayDanhSachPhimAction)
    }, [])

    useEffect(() => {
        dispatch(LayDSBannerAction)
    }, [])

    const { arrBanner } = useSelector(state => state.LayDSBannerReducer)

    return (
        <div style={{ width: '85%', margin: '0 auto' }}>
            <CarouselHome arrBanner={arrBanner} />
            <MultipleSlickFilm arrFilm={arrFilm} />
        </div>
    )
}
