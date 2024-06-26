import React from 'react'
import HeaderAccountItems from './HeaderAccountItems';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <header className='py-4 px-8 border-b border-secondary-200 rounded-3xl w-3/4 mx-auto h-fit bg-header bg-opacity-60 dark:bg-opacity-30'>
      <div className={`container xl:max-w-screen-lg flex flex-row justify-between items-center text-center`}>
        
        <div className='flex flex-row items-center align-middle'>
          <h1 className='text-lg text-purple-700 dark:text-purple-200'>سالن زیبایی آفاق</h1>
        </div>
        {/* <div className={`items-center justify-end gap-x-8 xl:max-w-screen-lg flex
            ${isLoading ? "blur-sm opacity-50" : ""}`}>
             <UserAvatar />
            <HeaderMenu />
          </div> */}
          <div className='items-center justify-end gap-x-8 xl:max-w-screen-xl flex'>
            <HeaderMenu />
          </div>

          <div className='items-center justify-end gap-x-8 xl:max-w-screen-xl flex'>
            <HeaderAccountItems isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          </div>
      </div>
    </header>
  )
}
export default Header;