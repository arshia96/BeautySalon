import React from 'react'
import { Link } from 'react-router-dom'
import CustomNavLink from '../../ui/CustomNavLink'

function HeaderMenu() {
    return (
        <ul className='flex gap-x-4 items-center align-middle'>
            <li className='flex'>
                <CustomNavLink to="/">
                    <p>خانه</p>
                </CustomNavLink>
            </li>
            <li className='flex'>
                <CustomNavLink to="blog">
                    <p>بلاگ</p>
                </CustomNavLink>
            </li>
            <li className='flex'>
                <CustomNavLink to="portfolio">
                    <p>نمونه کار</p>
                </CustomNavLink>
            </li>
            <li className='flex'>
                <CustomNavLink to="price">
                    <p>تعرفه</p>
                </CustomNavLink>
            </li>
            <li className='flex'>
                <CustomNavLink to="contact-us">
                    <p>تماس با ما</p>
                </CustomNavLink>
            </li>
        </ul>
    )
}

export default HeaderMenu