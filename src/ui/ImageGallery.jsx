import React, { useState } from 'react'
import OpenImageModal from './OpenImageModal';
import { HiSearchCircle } from 'react-icons/hi';

function ImageGallery({ images }) {
    const [ open, setOpen ] = useState(false);
    const [ img, setImg ] = useState({});
    //grid grid-flow-col sm:grid md:grid-flow-col p-0.5 gap-x-5
    return (
        <div className={`grid grid-cols-[repeat(auto-fill,10rem)] gap-4 mt-5`}>
            {images && images.map(i => (
                <div className="mb-4 md:mb-0 cursor-pointer w-40 h-40 overflow-hidden" onClick={() => { setImg({source: i.source, title: i.alt}); setOpen(true) }}>
                    <div className="relative max-w-md overflow-hidden bg-cover bg-no-repeat">
                        <img
                            src={i.source}
                            className="max-w-md w-full rounded-lg"
                            alt={i.alt} />
                        <div
                            className="rounded-lg absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-white bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
                                <p className='text-center mt-16'>
                                    {<HiSearchCircle className='w-10 h-10 mx-auto' />}
                                </p>
                        </div>
                    </div>
                </div>
            ))}
            
            <OpenImageModal open={open} onClose={() => setOpen(false)} title={img.title}>
                <img className='rounded-lg w-5/6 m-auto' src={img.source} alt={img.title} />
            </OpenImageModal>
        </div>
    ); 
}

export default ImageGallery;