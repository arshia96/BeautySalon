import React from 'react'

function CardImageText({ imgSrc, title, children, btnColor = "secondary", btnText, onclick }) {
    return (
        <div className='shadow-purple-300 shadow-md relative pt-16 rounded-md'>
            <img className='absolute right-36 -top-14 rounded-lg' src={ imgSrc } alt={ title } />
            <h3 className='text-xl font-bold text-center text-secondary-800'>{ title }</h3>
            { children }
            <div className='w-full flex justify-center absolute bottom-2'>
                <button className={`text-white btn btn--${ btnColor } text-center py-2 rounded-full w-48`} onClick={onclick()}>{ btnText }</button>
            </div>
        </div>
    )
}

export default CardImageText