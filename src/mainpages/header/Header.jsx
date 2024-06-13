import React from 'react'
import HeaderAccountItems from './HeaderAccountItems';
import HeaderMenu from './HeaderMenu';

function Header() {
  return (
    <header className='bg-transparent py-4 px-8 border-b border-secondary-200 rounded-3xl w-3/4 mx-auto h-fit' 
    style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}
    >
      <div className={`container xl:max-w-screen-lg flex flex-row justify-between items-center text-center`}>
        
        <div className='flex flex-row items-center align-middle'>
          <h1 className='text-lg text-purple-700'>سالن زیبایی آفاق</h1>
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
            <HeaderAccountItems />
          </div>
      </div>
    </header>
  )
}
export default Header;