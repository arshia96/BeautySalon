import React from 'react'

function SingleImageCard({ imgSource, text, onClick, buttonText }) {
  return (
    <div className='bg-secondary-0 h-full flex relative justify-center rounded-md' style={{ backgroundImage: `url(${imgSource})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <div className='absolute bottom-10 text-center'>
            <p className='text-secondary-700'>{ text }</p>
            <button className='btn btn--secondary w-48' onClick={ onClick() }>{ buttonText }</button>
        </div>
    </div>
  )
}

export default SingleImageCard;