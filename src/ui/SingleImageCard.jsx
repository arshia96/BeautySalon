import React from 'react'

function SingleImageCard({ imageSource, text, onClick, buttonText, height }) {
    const style = { 
        backgroundImage: `url(${ imageSource })`, 
        backgroundPosition: "center",
        backgroundSize: "cover", 
        backgroundRepeat: "no-repeat",
        height: height
    }
    return (
        <div className='mt-2 relative w-full rounded-md' 
        style={style}>
            <div className='absolute bottom-3 w-full text-center'>
                <p className='text-secondary-700'>{ text }</p>
                <button className='btn bg-purple-300 px-5 py-2 w-fit' onClick={ onClick() }>{ buttonText }</button>
            </div>
        </div>
    )
}

export default SingleImageCard;