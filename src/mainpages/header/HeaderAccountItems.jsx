import React, { useState } from 'react'
import { HiOutlineLogin, HiOutlineLogout, HiOutlineUser, HiOutlineX } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import DarkModeToggle from '../../ui/DarkModeToggle'

function HeaderAccountItems({ isLoggedIn, setIsLoggedIn }) {
    //const [ isLoggedIn, setIsLoggedIn ] = useState(true);
    return (
        <ul className='flex gap-x-5 items-center align-middle'>
            <li className='flex'>
                <DarkModeToggle />
            </li>
            {isLoggedIn ? (
                <>
                <li className='flex'>
                    <Link to="profile">
                        {/* <HiOutlineUser className='hi-icon text-purple-900' /> */}
                        <div className='flex gap-x-2 justify-center items-center'>
                            <img className='w-8 h-8 rounded-full' src="user.jpg" alt="profile" />
                            <p className='text-center text-purple-800 mt-1'>کاربر تست</p>
                        </div>
                    </Link>
                </li>
                <li className='flex'>
                    {/* <Logout></Logout> */}
                    {/* to="logout" */}<Link onClick={() => setIsLoggedIn(false)}>
                        <HiOutlineLogout className='hi-icon text-purple-900' />
                    </Link>
                </li>
                </>
            ) : (
                <li className='flex'>
                    {/* to="auth" */}<Link onClick={() => setIsLoggedIn(true)} className='btn bg-purple-600 flex gap-x-2 text-white p-2 dark:bg-purple-200'>
                        <HiOutlineLogin className='hi-icon text-white' />
                        <p>ورود به سایت</p>
                    </Link>
                </li>
            )}
        </ul>
    )
}

export default HeaderAccountItems