import React from 'react'
import ImageGallery from '../ui/ImageGallery'

function Portfolios() {
    const images = [
        {
            source: "../user.jpg",
            alt: "avatar"
        },
        {
            source: "../avatars/@wallpaperinng.jpg",
            alt: "Cute Raphael"
        },
        {
            source: "../avatars/@wallpaperinng (2).jpg",
            alt: "Cute Leonardo"
        },
        {
            source: "../avatars/@wallpaperinng (3).jpg",
            alt: "Game"
        },
        {
            source: "../avatars/@wallpaperinng (5).jpg",
            alt: "The Moon 1"
        },
        {
            source: "../avatars/@wallpaperinng (6).jpg",
            alt: "The Moon 2"
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