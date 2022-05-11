import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MultipleSlickFilm from '../../components/slickReact/MutipleSlickFilm'
import { LayDanhSachPhimAction } from '../../redux/actions/QuanLiRapAction'
import LayDSBannerAction from '../../redux/actions/QuanLiPhimAction'
import CarouselHome from '../../templates/layout/CarouselHome'

export default function Home() {
    const dispatch = useDispatch()

    const { arrFilm } = useSelector(state => state.QuanLiPhimReducer)

    useEffect(() => {
        dispatch(LayDanhSachPhimAction)
    }, [])

    useEffect(() => {
        dispatch(LayDSBannerAction)
    }, [])

    const { arrBanner } = useSelector(state => state.LayDSBannerReducer)

    return (
        <>
            <CarouselHome arrBanner={arrBanner} />
            <div style={{ width: '85%', margin: '0 auto' }}>
                <MultipleSlickFilm arrFilm={arrFilm} />
            </div>
        </>
    )
}
