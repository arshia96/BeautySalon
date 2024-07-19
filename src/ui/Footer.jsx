import React from 'react'
import CustomNavLink from './CustomNavLink'
import CustomSocialMediaIcon from './CustomSocialMediaIcon'
import { HiOutlinePhone } from 'react-icons/hi2'
import { HiOutlineMail } from 'react-icons/hi'

function Footer() {
  return (
    <footer className='p-3 h-fit rounded-md'>
        <div className="container xl:max-w-screen-xl space-y-5">
            <hr className='w-full h-0.5 bg-purple-300' />
            <div className='flex w-full h-20 justify-center'>
                <img src="images/background.jpg" alt="Logo" /> تصویر لوگو
            </div>
            <div className='flex flex-row justify-around'>
                <div className="flex flex-col">
                <h3 className='text-xl mx-auto text-secondary-800'>دسترسی سریع</h3>
                <ul className='h-full flex flex-col justify-between gap-y-0.5'>
                    <CustomNavLink to={"#!"}>  <p>خانه</p>  </CustomNavLink>
                    <CustomNavLink to={"#!"}>  <p>بلاگ</p>  </CustomNavLink>
                    <CustomNavLink to={"#!"}>  <p>نمونه کار</p>  </CustomNavLink>
                    <CustomNavLink to={"#!"}>  <p>تعرفه ها</p>  </CustomNavLink>
                    <CustomNavLink to={"#!"}>  <p>تماس با ما</p>  </CustomNavLink>
                </ul>
                </div>
                <div className="flex flex-col">
                <h3 className='text-xl mx-auto text-secondary-800'>رزرو تایم</h3>
                <ul className='h-full flex flex-col justify-between gap-y-0.5'>
                    <CustomNavLink to={"#!"}>  <p>لیفت ابرو</p>  </CustomNavLink>
                    <CustomNavLink to={"#!"}>  <p>کاشت ناخن</p>  </CustomNavLink>
                    <CustomNavLink to={"#!"}>  <p>سلامت پوست</p>  </CustomNavLink>
                    <CustomNavLink to={"#!"}>  <p>کوتاهی و رنگ مو</p>  </CustomNavLink>
                    <CustomNavLink to={"#!"}>  <p>شینیون</p>  </CustomNavLink>
                </ul>
                </div>
                <div className="flex flex-col">
                <h3 className='text-xl mx-auto text-secondary-800'>راه های ارتباط با ما</h3>
                <ul className='flex flex-col gap-y-0.5'>
                    <li className='text-sm mt-1 py-2 px-3 w-56 transition-all ease-in-out duration-300 text-purple-700 hover:text-purple-500 font-bold'><a className='flex gap-x-2' href='#!'><HiOutlinePhone className='hi-icon' /><span style={{direction: "ltr"}}>0912 345 6789</span></a></li>
                    <li className='text-sm py-2 px-3 w-56 transition-all ease-in-out duration-300 text-purple-700 hover:text-purple-500 font-bold'><a className='flex gap-x-2' href='#!'><HiOutlineMail className='hi-icon' /><span style={{direction: "ltr"}}>info@beautysalon.com</span></a></li>
                </ul>
                <div className='mt-8 flex gap-x-2 justify-center'>
                    <CustomSocialMediaIcon href="#!" iconUrl="https://telegram.com/amahmoudian_ir" />
                    <CustomSocialMediaIcon href="#!" iconUrl="https://instagram.com/amahmoudian.ir" />
                    <CustomSocialMediaIcon href="#!" iconUrl="https://youtube.com/amahmoudian.ir" />
                    <CustomSocialMediaIcon href="#!" iconUrl="https://www.linkedin.com/in/arshiamah" />
                </div>
                </div>
            </div>
            <div className='text-center text-secondary-800'>
                © {new Date().getFullYear()} سالن آفاق -  تمام حقوق اين وب‌سايت متعلق به سالن آرایشی آفاق است
            </div>
        </div>
    </footer>
  )
}

export default Footer