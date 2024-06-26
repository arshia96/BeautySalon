import React from 'react'
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2'

function SingleWideCard({ imgSrc, title, children, buttonText, buttonColor = "primary", onclick }) {
  return (
    <>
    <div className="w-1/3">
        <div className='w-full flex h-full overflow-hidden rounded-md'>
        <img className='m-auto rounded-md' src={imgSrc} alt={title} />
        </div>
    </div>
    <div className="w-2/3 space-y-4">
        <h2 className='text-2xl text-secondary-900'>{title}</h2>
        {children}
        <button className={`btn btn--${buttonColor} flex gap-x-2 justify-center`} onClick={onclick()}>
        {buttonText} <HiOutlineArrowTopRightOnSquare className='hi-icon' />
        </button>
    </div>
    </>
  )
}

export default SingleWideCard