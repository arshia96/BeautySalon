import React from 'react'
import { Link } from 'react-router-dom'
import CustomHeaderNavLink from '../../ui/CustomHeaderNavLink'

function HeaderMenu() {
    return (
        <ul className='flex gap-x-4 items-center align-middle'>
            <li className='flex'>
                <CustomHeaderNavLink to="/">
                    <p>خانه</p>
                </CustomHeaderNavLink>
            </li>
            <li className='flex'>
                <CustomHeaderNavLink to="blog">
                    <p>بلاگ</p>
                </CustomHeaderNavLink>
            </li>
            <li className='flex'>
                <CustomHeaderNavLink to="portfolio">
                    <p>نمونه کار</p>
                </CustomHeaderNavLink>
            </li>
            <li className='flex'>
                <CustomHeaderNavLink to="price">
                    <p>تعرفه</p>
                </CustomHeaderNavLink>
            </li>
            <li className='flex'>
                <CustomHeaderNavLink to="contact-us">
                    <p>تماس با ما</p>
                </CustomHeaderNavLink>
            </li>
        </ul>
    )
}

export default HeaderMenu