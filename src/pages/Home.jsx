import React from 'react'
import Loading from '../ui/Loading';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../mainpages/header/Header';

function Home() {
  const navigate = useNavigate();
  return (
    <div className='h-screen bg-secondary-0'>
      <div 
      className='p-1 container xl:max-w-screen-xl text-center' 
      style={{height: "66vh", backgroundImage: "url('./images/5456624.jpg')", backgroundPosition: "center", backgroundSize: "cover"}}
      >
        <Header />
      </div>
        <h1 className='p-4 text-xl text-secondary-700 text-center'>صفحه اصلی</h1>
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