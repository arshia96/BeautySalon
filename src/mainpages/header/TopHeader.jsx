import React from 'react'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'

function TopHeader() {
  return (
    <div className='container xl:max-w-screen-xl h-8 rounded-md bg-pink-50 flex gap-x-10 py-1 px-10 dark:text-pink-900'>
        <a href="mailto:info@beautysalon.ir">
            <p className='flex gap-x-2' style={{direction: "ltr"}}>
            <HiOutlineMail className='hi-icon' /> info@beautysalon.ir
            </p>
        </a>
        <a href="tel:+989120000000">
            <p className='flex gap-x-2' style={{direction: "ltr"}}>
            <HiOutlinePhone className='hi-icon' /> +989120000000
            </p>
        </a>
    </div>
  )
}

export default TopHeader