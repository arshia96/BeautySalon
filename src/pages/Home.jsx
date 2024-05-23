import React from 'react'
import Loading from '../ui/Loading';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className='h-screen bg-secondary-0'>
      <div className='p-4 container xl:max-w-screen-xl text-center'>
        <h1 className='p-4 text-xl text-secondary-700'>صفحه اصلی</h1>
        
      </div>
      <button className='btn btn--primary mx-auto block'>
        <Link
          to={`customer`}
        >
          ورود به پنل مشتری
        </Link>
      </button>
    </div>
  )
}

export default Home