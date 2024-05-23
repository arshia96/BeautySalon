import React from 'react'
import Loading from '../ui/Loading';
import { useNavigate } from 'react-router-dom';
import ImageGallery from '../ui/ImageGallery';

function Home() {
  const navigate = useNavigate();
  return (
    <div className='h-screen bg-secondary-0'>
      <div className='p-4 container xl:max-w-screen-xl'>
        <h1 className='p-4 text-xl text-secondary-700'>صفحه اصلی</h1>
      </div>
    </div>
  )
}

export default Home