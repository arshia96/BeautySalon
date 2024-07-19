import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../mainpages/header/Header';
import Footer from './Footer';

function PageLayout({ children }) {
    // const [ openSidebar, setOpenSidebar ] = useState(false);
    return (
    <div className='bg-gradient-to-b from-pink-100 to-purple-200 dark:from-pink-100 dark:to-pink-50'>
        <div className='flex flex-col'> 
        {/* grid-rows-[auto_1fr] grid-cols-[15rem_1fr] */}
            <div className='bg-header bg-opacity-60 dark:bg-opacity-30'>
                <Header />
            </div>
            { children }
            <div className='h-full'>
                <div className="mx-auto">
                    <Outlet />
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default PageLayout;