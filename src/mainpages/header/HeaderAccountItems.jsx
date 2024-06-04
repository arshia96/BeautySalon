import React, { useState } from 'react'
import { HiOutlineLogin, HiOutlineLogout, HiOutlineUser, HiOutlineX } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import DarkModeToggle from '../../ui/DarkModeToggle'

function HeaderAccountItems() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    return (
        <ul className='flex gap-x-4 items-center align-middle'>
            <li className='flex'>
                <DarkModeToggle />
            </li>
            {isLoggedIn ? (
                <>
                <li className='flex'>
                    <Link to="profile">
                        <HiOutlineUser className='hi-icon text-primary-900' />
                    </Link>
                </li>
                <li className='flex'>
                    {/* <Logout></Logout> */}
                    <Link to="logout">
                        <HiOutlineLogout className='hi-icon text-primary-900' />
                    </Link>
                </li>
                </>
            ) : (
                <li className='flex'>
                    <Link to="auth" className='btn btn--primary flex gap-x-2 text-white p-2'>
                        <HiOutlineLogin className='hi-icon text-white' />
                        <p>ورود به سایت</p>
                    </Link>
                </li>
            )}
        </ul>
    )
}

export default HeaderAccountItems