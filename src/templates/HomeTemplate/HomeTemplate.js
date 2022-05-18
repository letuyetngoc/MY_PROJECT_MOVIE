import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import Footer from '../layout/Footer'
import Header from '../layout/Header'

export default function HomeTemplate(props) {
    const { Component, ...restProps } = props
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        < Route {...restProps} render={(propsRout) => {
            return <>
                <Header {...propsRout} />
                <Component {...propsRout} />
                <Footer {...propsRout} />
            </>
        }} />
    )
}
