import React from 'react'
import './header.sass'
import { Link } from "gatsby";

export default () => {
    return (
        <Link className='header' to='/'>
           <span>LEAPOR</span>
        </Link>
    )
}