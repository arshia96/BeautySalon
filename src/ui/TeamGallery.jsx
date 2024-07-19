import React, { useState } from 'react'
import OpenImageModal from './OpenImageModal';
import { HiOutlineArrowsExpand } from 'react-icons/hi';

function TeamGallery({ data }) {
    const [ open, setOpen ] = useState(false);
    const [ img, setImg ] = useState({});
    //grid grid-flow-col sm:grid md:grid-flow-col p-0.5 gap-x-5
    return (
        <div className={`grid grid-cols-[repeat(auto-fill,18rem)] gap-6 mt-5 p-4 justify-center mx-8`}>
            {data && data.map(member => (
                <>
                <div className='w-full max-h-80 space-y-2'>
                    <div className="mb-4 md:mb-0 cursor-pointer w-full max-h-64 overflow-hidden rounded-lg" onClick={() => { setImg({source: member.image, title: member.name}); setOpen(true) }}>
                        <div className="relative max-w-md overflow-hidden bg-cover bg-no-repeat">
                            <img
                                src={member.image}
                                className="max-w-md w-full rounded-lg my-auto"
                                alt={member.name} />
                            <div
                                className="rounded-lg absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-white bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60">
                                    <p className='text-center mt-28'>
                                        {<HiOutlineArrowsExpand className='w-10 h-10 my-auto mx-auto' />}
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-0'>
                        <p className='text-center text-secondary-800 text-xl'>{member.name}</p>
                        <p className='text-center text-secondary-600 text-sm'>{member.job}</p>
                    </div>
                </div>
                </>
            ))}
            
            <OpenImageModal open={open} onClose={() => setOpen(false)} title={img.title}>
                <img className='rounded-lg w-5/6 m-auto' src={img.source} alt={img.title} />
            </OpenImageModal>
        </div>
    ); 
}

export default TeamGallery;