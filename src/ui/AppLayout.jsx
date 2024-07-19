import { Outlet } from 'react-router-dom'
import Header from './Header'
import { useState } from 'react'

function AppLayout({ children }) {
  const [ openSidebar, setOpenSidebar ] = useState(false);
  return (
    <div className='flex flex-col h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]'>
      <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      { children({openSidebar}) }
        <div className='bg-secondary-100 p-2 overflow-y-auto h-full'>
          <div className="mx-auto max-w-screen-lg p-3">
            <Outlet />
          </div>
        </div>
    </div>
  )
}

export default AppLayout