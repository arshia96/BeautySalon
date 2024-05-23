import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

function PageHeader({ headerTitle, children = '' }) {
    const navigate = useNavigate();
  return (
    <div className='flex flex-row justify-between items-center gap-x-4'>
        <div className='flex flex-row gap-x-4'>
          <button onClick={() => navigate(-1)}>
              <HiArrowRight className='hi-icon text-secondary-500' />
          </button>
          <h1 className='font-black text-secondary-700 text-xl'>{headerTitle}</h1>
        </div>
        <div>
          {children}
        </div>
    </div>
  )
}

export default PageHeader