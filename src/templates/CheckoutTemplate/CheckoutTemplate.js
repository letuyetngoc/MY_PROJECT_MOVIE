import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { USER_LOGIN } from '../../util/settings/config'
import Header from '../layout/Header'

export default function CheckoutTemplate(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to='/dangnhap' />
    }

    const { Component, ...restProps } = props
    return (
        < Route {...restProps} render={(propsRout) => {
            return <>
                {/* <Header {...propsRout} /> */}
                <Component {...propsRout} />
            </>
        }} />
    )
}