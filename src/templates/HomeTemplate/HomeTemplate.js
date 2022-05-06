import React from 'react'
import { Route } from 'react-router-dom'
import CarouselHome from '../layout/CarouselHome'
import Footer from '../layout/Footer'
import Header from '../layout/Header'

export default function HomeTemplate(props) {
    const { Component, ...restProps } = props
    return (
        < Route {...restProps} render={(propsRout) => {
            return <>
                <Header {...propsRout} />
                <CarouselHome {...propsRout} />
                <Component {...propsRout} />
                <Footer {...propsRout} />
            </>
        }} />
    )
}
