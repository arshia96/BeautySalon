import { Outlet } from 'react-router-dom'
import Header from './Header'

function AppLayout({ children }) {
  return (
    <div className='grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]'>
      <Header />
      {children}
        <div className='bg-secondary-100 p-2 overflow-y-auto'>
          <div className="max-w-screen-lg p-3">
            <Outlet />
          </div>
        </div>
    </div>
  )
}

export default AppLayout