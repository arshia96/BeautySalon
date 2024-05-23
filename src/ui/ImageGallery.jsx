import React, { useState } from 'react'
import OpenImageModal from './OpenImageModal';

function ImageGallery({ images }) {
    const [ open, setOpen ] = useState(false);
    const [ img, setImg ] = useState({});
    return (
        <div className={`grid grid-flow-col p-0.5`}>
            {images && images.map(i => (
                <img 
                    className='rounded-lg my-3 w-4/5 cursor-pointer' 
                    src={i.source} 
                    alt={i.alt} 
                    onClick={() => { setImg({source: i.source, title: i.alt}); setOpen(true) }} 
                />
            ))}
            <OpenImageModal open={open} onClose={() => setOpen(false)} title={img.title}>
                <img className='rounded-lg w-5/6 m-auto' src={img.source} alt={img.title} />
            </OpenImageModal>
        </div>
    ); 
}

export default ImageGallery;