import React from 'react'
function Sidebar({children, openSidebar}) {
  return (
    // openSidebar &&
    // (
    //style={{visibility: `${openSidebar ? "visible" : "hidden"}`, transition:'visibility 0s, opacity 0.5s linear', opacity: `${openSidebar ? 1 : 0}`}}
      <div className={`z-10 absolute h-full bg-secondary-0 row-start-1 row-span-2 border-l border-gray-200 p-4`} 
      style={{visibility: `${openSidebar ? "visible" : "hidden"}`, transition:'visibility 0s, opacity 0.1s linear', opacity: `${openSidebar ? 1 : 0}`}}>
        <ul className='flex flex-col gap-y-4'>
            {children}
        </ul>
      </div>
    // )
  )
}
export default Sidebar;