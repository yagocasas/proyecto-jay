import React from 'react'
import { NavLink } from 'react-router-dom'

const Anchor = (nav, texto, type) => {
    return (
        <NavLink to={nav} activeClassName='active' className={type}>{texto}</NavLink>
    )
}



export default Anchor