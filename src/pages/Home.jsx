import React from 'react'
import Loading from '../ui/Loading';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../mainpages/header/Header';
import SingleImageCard from '../ui/SingleImageCard';
import SingleTextCard from '../ui/SingleTextCard';
import { HiOutlineMail, HiOutlinePhone, HiOutlinePlusCircle, HiPhone } from 'react-icons/hi';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';
import { SocialIcon } from 'react-social-icons';
function Home() {
  const navigate = useNavigate();
  return (
    <div className='h-full bg-pink-50 '>
      <div className=''>
        <section>
          <div className='container xl:max-w-screen-xl h-8 rounded-md bg-pink-50 flex gap-x-10 py-1 px-10'>
            <a href="mailto:info@beautysalon.ir">
              <p className='flex gap-x-2' style={{direction: "ltr"}}>
                <HiOutlineMail className='hi-icon' /> info@beautysalon.ir
              </p>
            </a>
            <a href="tel:+989120000000">
              <p className='flex gap-x-2' style={{direction: "ltr"}}>
                <HiOutlinePhone className='hi-icon' /> +989120000000
              </p>
            </a>
          </div>
        </section>

        <section>
          <div 
          className='p-1 text-center rounded-md flex flex-col'  
          style={{height: "80vh", backgroundImage: "url('./images/slider1.jpg')", backgroundPosition: "center", backgroundSize: "cover"}}
          >
            <Header />
            <div className='m-auto flex-col flex gap-y-3 bg-white bg-opacity-55 p-5 rounded-md'>
              <p className='text-2xl text-purple-700'>یک شعاری رو به ما بسپارید</p>
              <div className='flex gap-x-3 mx-auto'>
                <button 
                  className='flex gap-x-1 px-3 py-1 border border-purple-800 text-purple-800 
                  justify-center rounded-xl transition-all ease-in-out duration-300 hover:bg-purple-800 
                  hover:text-white'
                >
                  تماس با ما <HiOutlinePhone className='hi-icon' />
                </button>
                <button 
                  className='flex gap-x-1 px-3 py-1 border border-purple-800 text-purple-800 
                  justify-center rounded-xl transition-all ease-in-out duration-300 hover:bg-purple-800 
                  hover:text-white'
                >
                  رزرو تایم <HiOutlinePlusCircle className='hi-icon' />
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <section className=''>
          <div className='mt-10 container xl:max-w-screen-xl flex gap-x-4 justify-center' style={{height: "60vh"}}>
            <div className="before-dots after-dots w-1/2 relative">
              <div className='w-1/2 relative'>
                <div className='absolute right-44 top-0 w-48'>
                  <img className='h-96 w-48' src="images/1-1.jpg" alt="" />
                </div>
              </div>
              <div className='w-1/2 relative'>
                <div className='absolute right-96 top-10 w-48'>
                  <img className='h-96 w-44' src="images/1-2.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="w-1/2 pt-5 space-y-4">
              <h2 className='text-2xl'> ما کی هستیم؟ </h2>
              <p className='text-md w-96 text-justify'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای نقطه.</p>
              <button className='btn btn--primary flex gap-x-2 justify-center'>
                در مورد ما بیشتر بدانید <HiOutlineArrowTopRightOnSquare className='hi-icon' />
              </button>
            </div>
          </div>
        </section>

        <section className='bg-pink-200 pt-20 pb-28'>
          <section className=''>
            <div className="container xl:max-w-screen-xl grid grid-cols-3 gap-x-5 h-72">
              <div className='shadow-purple-300 shadow-md relative pt-16 rounded-md'>
                <img className='absolute right-36 -top-14 rounded-lg' src="user.jpg" alt="" />
                <h3 className='text-xl font-bold text-center text-secondary-800'>عنوان 1</h3>
                <p className='text-secondary-600 text-justify m-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و غیره است</p>
                <div className='w-full flex justify-center absolute bottom-2'>
                  <button className='text-white btn btn--secondary text-center py-2 rounded-full w-48'>بیشتر بدانید</button>
                </div>
              </div>

              <div className='shadow-purple-300 shadow-md relative pt-16 rounded-md'>
                <img className='absolute right-36 -top-14 rounded-lg' src="user.jpg" alt="" />
                <h3 className='text-xl font-bold text-center text-secondary-800'>عنوان 2</h3>
                <p className='text-secondary-600 text-justify m-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و غیره است</p>
                <div className='w-full flex justify-center absolute bottom-2'>
                  <button className='text-white btn btn--primary text-center py-2 rounded-full w-48'>رزرو تایم</button>
                </div>
              </div>

              <div className='shadow-purple-300 shadow-md relative pt-16 rounded-md'>
                <img className='absolute right-36 -top-14 rounded-lg' src="user.jpg" alt="" />
                <h3 className='text-xl font-bold text-center text-secondary-800'>عنوان 3</h3>
                <p className='text-secondary-600 text-justify m-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و غیره است</p>
                <div className='w-full flex justify-center absolute bottom-2'>
                  <button className='text-white btn btn--secondary text-center py-2 rounded-full w-48'>بیشتر بدانید</button>
                </div>
              </div>
            </div>
          </section>

          <section className=''>
            <div className="mt-28 container xl:max-w-screen-xl grid grid-cols-2 gap-x-10 h-80">
              <div className='h-full space-y-5'>
                <div className='w-full h-72 overflow-hidden rounded-md'>
                  <img className='mx-auto' src="images/rightside.jpg" alt="" />
                </div>
                <h3 className='text-xl text-center font-bold text-secondary-900'>عنوان سمت راست</h3>
                <button className='btn btn--secondary w-48 flex justify-center mx-auto py-2'>کلیک کنید</button>
              </div>

              <div className='h-full space-y-5'>
                <div className='w-full h-72 overflow-hidden rounded-md'>
                  <img className='mx-auto' src="images/leftside.jpg" alt="" />
                </div>
                <h3 className='text-xl text-center font-bold text-secondary-900'>عنوان سمت چپ</h3>
                <button className='btn btn--secondary w-48 flex justify-center mx-auto py-2'>کلیک کنید</button>
              </div>
            </div>
          </section>
        </section>

        <section className=''>
          <div className='mt-10 container xl:max-w-screen-xl flex gap-x-10 justify-center' style={{height: "50vh"}}>
            <div className="w-1/3">
              <div className='w-full flex h-full overflow-hidden rounded-md'>
                <img className='m-auto rounded-md' src="images/artist.jpg" alt="" />
              </div>
            </div>
            <div className="w-2/3 space-y-4">
              <h2 className='text-2xl'> هنرمندان ما</h2>
              <p className='text-md text-justify w-10/12'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای نقطه.</p>
              <p className='text-md text-justify w-10/12'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای نقطه.</p>
              <button className='btn btn--primary flex gap-x-2 justify-center'>
                مشاهده اعضای تیم <HiOutlineArrowTopRightOnSquare className='hi-icon' />
              </button>
            </div>
          </div>
        </section>

        <section className='pt-5 pb-5 bg-purple-950'>
          <div className='container xl:max-w-screen-xl grid grid-cols-3'>
            <div className="w-full flex">
              <h2 className='text-white text-2xl font-bold my-auto'>ارتباط با ما</h2>
            </div>
            <div className="w-full flex">
              <p className='text-white my-auto'>برای تماس با ما، روی دکمه ی روبرو کلیک کنید یا به ایمیل reserve@beautysalon.ir ایمیل بزنید.</p>
            </div>
            <div className="w-full flex">
              <button className='btn btn--primary w-48 m-auto'>تماس با ما</button>
            </div>
          </div>
        </section>

        <section className='pt-16 pb-96'>
          <div className="container xl:max-w-screen-xl h-72">
            <h2 className='text-center text-2xl font-bold mb-20'>خدمات ما</h2>
            <div className='grid grid-cols-3 gap-x-5'>
              <div className='rounded-md pb-2 space-y-5'>
                <div className='flex overflow-hidden rounded-md'>
                  <img className='m-auto rounded-md h-64' src="images/leftside.jpg" alt="" />
                </div>
                <h3 className='text-xl font-bold text-center text-secondary-800'>عنوان 1</h3>
                <p className='text-secondary-600 text-justify m-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و غیره است</p>
                <div className='w-full flex justify-center'>
                  <button className='text-white btn btn--secondary text-center py-2 rounded-full w-48'>بیشتر بدانید</button>
                </div>
              </div>

              <div className='rounded-md pb-2 space-y-5'>
                <div className='flex overflow-hidden rounded-md'>
                  <img className='m-auto rounded-md h-64' src="images/artist.jpg" alt="" />
                </div>
                <h3 className='text-xl font-bold text-center text-secondary-800'>عنوان 2</h3>
                <p className='text-secondary-600 text-justify m-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و غیره است</p>
                <div className='w-full flex justify-center'>
                  <button className='text-white btn btn--secondary text-center py-2 rounded-full w-48'>بیشتر بدانید</button>
                </div>
              </div>

              <div className='rounded-md pb-2 space-y-5'>
                <div className='flex overflow-hidden rounded-md'>
                  <img className='m-auto rounded-md h-64' src="images/rightside.jpg" alt="" />
                </div>
                <h3 className='text-xl font-bold text-center text-secondary-800'>عنوان 3</h3>
                <p className='text-secondary-600 text-justify m-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و غیره است</p>
                <div className='w-full flex justify-center'>
                  <button className='text-white btn btn--secondary text-center py-2 rounded-full w-48'>بیشتر بدانید</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className='p-3 h-fit bg-pink-100 rounded-md'>
          <div className="container xl:max-w-screen-xl space-y-5">
            <div className='flex w-full h-20 justify-center'>
              <img src="images/background.jpg" alt="Logo" /> تصویر لوگو
            </div>
            <hr className='w-full h-0.5 bg-purple-300' />
            <div className='flex flex-row justify-around'>
              <div className="flex flex-col">
                <h3 className='text-xl mx-auto'>دسترسی سریع</h3>
                <ul className='h-full flex flex-col justify-between gap-y-0.5'>
                  <li className='mt-1 p-1 w-48 rounded-md transition-all ease-in-out duration-300 text-purple-700 hover:text-purple-500'><a href='#!'>⁘ خانه</a></li>
                  <li className='p-1 w-48 rounded-md transition-all ease-in-out duration-300 text-purple-700 hover:text-purple-500'><a href='#!'>⁘ بلاگ</a></li>
                  <li className='p-1 w-48 rounded-md transition-all ease-in-out duration-300 text-purple-700 hover:text-purple-500'><a href='#!'>⁘ نمونه کار</a></li>
                  <li className='p-1 w-48 rounded-md transition-all ease-in-out duration-300 text-purple-700 hover:text-purple-500'><a href='#!'>⁘ تعرفه ها</a></li>
                  <li className='p-1 w-48 rounded-md transition-all ease-in-out duration-300 text-purple-700 hover:text-purple-500'><a href='#!'>⁘ تماس با ما</a></li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h3 className='text-xl mx-auto'>رزرو تایم</h3>
                <ul className='h-full flex flex-col justify-between gap-y-0.5'>
                  <li className='mt-1 p-1 w-48 rounded-md transition-all ease-in-out duration-300 text-purple-700 hover:text-purple-500'><a href='#!'>⁘ لیفت ابرو</a></li>
                  <li className='p-1 w-48 rounded-md transition-all ease-in-out duration-300 text-purple-700 hover:text-purple-500'><a href='#!'>⁘ کاشت ناخن</a></li>
                  <li className='p-1 w-48 rounded-md transition-all ease-in-out duration-300 text-purple-700 hover:text-purple-500'><a href='#!'>⁘ رنگ مو</a></li>
                  <li className='p-1 w-48 rounded-md transition-all ease-in-out duration-300 text-purple-700 hover:text-purple-500'><a href='#!'>⁘ کوتاهی مو</a></li>
                  <li className='p-1 w-48 rounded-md transition-all ease-in-out duration-300 text-purple-700 hover:text-purple-500'><a href='#!'>⁘ پدیکور و مانیکور</a></li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h3 className='text-xl mx-auto'>راه های ارتباط با ما</h3>
                <ul className='flex flex-col gap-y-0.5'>
                  <li className='text-sm mt-1 py-2 px-3 w-56 transition-all ease-in-out duration-300 text-purple-700 hover:text-purple-500 font-bold'><a className='flex gap-x-2' href='#!'><HiOutlinePhone className='hi-icon' /><span style={{direction: "ltr"}}>0912 345 6789</span></a></li>
                  <li className='text-sm py-2 px-3 w-56 transition-all ease-in-out duration-300 text-purple-700 hover:text-purple-500 font-bold'><a className='flex gap-x-2' href='#!'><HiOutlineMail className='hi-icon' /><span style={{direction: "ltr"}}>info@beautysalon.com</span></a></li>
                </ul>
                <div className='mt-8 flex gap-x-2 justify-center'>
                  <a className='flex gap-x-1' href='#!'><SocialIcon className='transition-all duration-300 hover:-translate-y-1' style={{width: "30px", height: "30px"}} url='https://telegram.com/amahmoudian_ir' target='_blank' /></a>
                  <a className='flex gap-x-1' href='#!'><SocialIcon className='transition-all duration-300 hover:-translate-y-1' style={{width: "30px", height: "30px"}} url='https://instagram.com/amahmoudian.ir' target='_blank' /></a>
                  <a className='flex gap-x-1' href='#!'><SocialIcon className='transition-all duration-300 hover:-translate-y-1' style={{width: "30px", height: "30px"}} url='https://youtube.com/amahmoudian.ir' target='_blank' /></a>
                  <a className='flex gap-x-1' href='#!'><SocialIcon className='transition-all duration-300 hover:-translate-y-1' style={{width: "30px", height: "30px"}} url='https://www.linkedin.com/in/arshiamah' target='_blank' /></a>
                </div>
              </div>
            </div>
            <div className='text-center'>
              © {new Date().getFullYear()} سالن آفاق -  تمام حقوق اين وب‌سايت متعلق به سالن آرایشی آفاق است
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home;