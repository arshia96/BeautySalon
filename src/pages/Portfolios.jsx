import React from 'react'
import ImageGallery from '../ui/ImageGallery'

function Portfolios() {
    const images = [
        {
            source: "../user.jpg",
            alt: "avatar"
        },
        {
            source: "../user.jpg",
            alt: "avatar"
        },
        {
            source: "../user.jpg",
            alt: "avatar"
        },
        {
            source: "../user.jpg",
            alt: "avatar"
        },
        {
            source: "../user.jpg",
            alt: "avatar"
        },
        {
            source: "../user.jpg",
            alt: "avatar"
        }
        ]
    return (
        <div className='p-4'>
            <h1 className='text-3xl text-secondary-700'>نمونه کارهای ما</h1>
            <ImageGallery images={images} />
        </div>
    )
}

export default Portfolios