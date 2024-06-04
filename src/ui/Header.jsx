import React, { useState } from 'react'
import HeaderMenu from './HeaderMenu';
import { HiMenu, HiX } from 'react-icons/hi';

function Header() {
  const [ open, setOpen ] = useState(false); 
  return (
    <div className='bg-secondary-0 py-4 px-8 border-b border-secondary-200'>
      <div className={`container xl:max-w-screen-lg flex flex-row justify-between`}>
        <div className='flex flex-row items-center align-middle'>
          <div className='ml-5'>
            {!open ? 
            <HiMenu className='hi-icon text-secondary-900 transition-all ease-out' /> 
            : 
            <HiX className='hi-icon text-secondary-900 transition-all ease-out' />
            }
          </div>
          <h1 className='text-lg text-secondary-700'>سالن زیبایی</h1>
        </div>
        {/* <div className={`items-center justify-end gap-x-8 xl:max-w-screen-lg flex
            ${isLoading ? "blur-sm opacity-50" : ""}`}>
             <UserAvatar />
            <HeaderMenu />
          </div> */}
          <div className='items-center justify-end gap-x-8 xl:max-w-screen-lg flex'>
            <HeaderMenu />
          </div>
      </div>
    </div>
  )
}

export default Header;