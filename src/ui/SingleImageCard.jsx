import React from 'react'

function SingleImageCard({ imgSrc, title, children, btnColor = "secondary", btnText, onclick }) {
    return (
        <div className='rounded-md pb-2 space-y-5'>
            <div className='flex overflow-hidden rounded-md'>
                <img className='m-auto rounded-md h-64' src={imgSrc} alt={title} />
            </div>
            <h3 className='text-xl font-bold text-center text-secondary-800'>{title}</h3>
            {children}
            <div className='w-full flex justify-center'>
                <button className={`text-white btn btn--${btnColor} text-center py-2 rounded-full w-48`} onClick={onclick()}>{btnText}</button>
            </div>
        </div>
    )
}

export default SingleImageCard;