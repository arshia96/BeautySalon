import React from 'react'

function CardImageNoText({ imgSrc, title, btnText, onclick }) {
    return (
        <div className='h-full space-y-5'>
            <div className='w-full h-72 overflow-hidden rounded-md'>
                <img className='mx-auto' src={ imgSrc } alt={ title } />
            </div>
            <h3 className='text-xl text-center font-bold text-secondary-900 dark:text-secondary-600'>{ title }</h3>
            <button className='btn btn--secondary w-48 flex justify-center mx-auto py-2 text-white' onClick={onclick()}>{ btnText }</button>
        </div>
    )
}

export default CardImageNoText