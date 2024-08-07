import React from 'react'
import { HiOutlineUser } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'

function HeaderMenu() {
  return (
    <ul className='flex gap-x-4 items-center justify-center'>
      <li className='flex text-center items-center gap-x-3'>
        <img src="/user.jpg" alt="تصویر پروفایل" className='w-8 h-8' />
        <p className='mt-1'>کاربر تست</p>
      </li>
      <li className='flex'>
        <Link to="profile">
          <HiOutlineUser className='hi-icon text-primary-900' />
        </Link>
      </li>
      <li className='flex'>
        <DarkModeToggle />
      </li>
      <li className='flex'>
        {/* <Logout></Logout> */}
      </li>
    </ul>
  )
}

export default HeaderMenu