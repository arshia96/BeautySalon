import React from 'react'
import Loading from '../ui/Loading';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../mainpages/header/Header';
import SingleImageCard from '../ui/SingleImageCard';
import SingleTextCard from '../ui/SingleTextCard';
import { HiOutlineMail, HiOutlinePhone, HiPhone } from 'react-icons/hi';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';
import { SocialIcon } from 'react-social-icons';
function Home() {
  const navigate = useNavigate();
  return (
    <div className='h-full bg-pink-50 '>
      <div className='container xl:max-w-screen-xl'>
        <div 
        className='p-1 text-center rounded-md' 
        style={{height: "66vh", backgroundImage: "url('./images/5456624.jpg')", backgroundPosition: "center", backgroundSize: "cover"}}
        >
          <Header />
        </div>

        <div className="flex flex-row gap-x-3 h-fit w-full">
          <div className="w-1/2 flex my-auto">
            <SingleImageCard 
              text="متن مربوط به تصویر" 
              imageSource="images/5456624.jpg" 
              buttonText="نمایش بیشتر" 
              onClick={() => {}} 
              height="55vh"
            />
          </div>
          <div className="w-1/2 flex my-auto">
            <SingleTextCard className='bg-orange-50 flex flex-col gap-y-4'>
              <h2 className='text-secondary-900 text-2xl'>خدمات ما</h2>
              <p className='text-secondary-900'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <button className='flex gap-x-2 justify-center btn bg-purple-300 w-1/3'>میخوام بیشتر بدونم <HiOutlineArrowTopRightOnSquare className='hi-icon text-secondary-700' /></button>
            </SingleTextCard>
          </div>
        </div>

        <div className="flex flex-row gap-x-3 h-fit w-full">
          <div className="w-1/2 flex my-auto">
            <SingleTextCard className='bg-orange-50 flex flex-col gap-y-4'>
              <h2 className='text-secondary-900 text-2xl'>شرایط استثنائی</h2>
              <p className='text-secondary-900'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <button className='flex gap-x-2 justify-center btn bg-purple-300 w-1/3'>میخوام بیشتر بدونم <HiOutlineArrowTopRightOnSquare className='hi-icon text-secondary-700' /></button>
            </SingleTextCard>
          </div>
          <div className="w-1/2 flex my-auto">
            <SingleImageCard 
              text="متن مربوط به تصویر" 
              imageSource="images/5456624.jpg" 
              buttonText="نمایش بیشتر" 
              onClick={() => {}} 
              height="55vh"
            />
          </div>
        </div>

        <div className='grid grid-flow-row grid-cols-2 gap-y-2 gap-x-2 mb-5'>
          <SingleTextCard>
            <div className='flex flex-col gap-y-3 p-2 rounded-md'>
              <h2 className='text-2xl text-secondary-900'>زیبایی</h2>
              <p className='text-secondary-700'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای 
              </p>
            </div>
          </SingleTextCard>
          <SingleTextCard>
          <div className='flex flex-col gap-y-3 p-2 rounded-md'>
            <h2 className='text-2xl text-secondary-900'>کیفیت بالا</h2>
            <p className='text-secondary-700'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای 
            </p>
          </div>
          </SingleTextCard>
          <SingleTextCard>
          <div className='flex flex-col gap-y-3 p-2 rounded-md'>
            <h2 className='text-2xl text-secondary-900'>قیمت مناسب</h2>
            <p className='text-secondary-700'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای 
            </p>
          </div>
          </SingleTextCard>
          <SingleTextCard>
          <div className='flex flex-col gap-y-3 p-2 rounded-md'>
            <h2 className='text-2xl text-secondary-900'>خاص و جذاب</h2>
            <p className='text-secondary-700'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای 
            </p>
          </div>
          </SingleTextCard>
        </div>

        <div className='w-full bg-pink-50 h-60 flex flex-col gap-y-4 justify-center text-center rounded-md'>
          <h3 className="text-3xl text-secondary-700">با کارشناسان ما در تماس باشید</h3>
          <button className='flex gap-x-2 justify-center btn bg-purple-300 w-1/3 mx-auto'>تماس با ما <HiPhone className='hi-icon' /></button>
        </div>

        <footer className='p-3 h-fit flex flex-row justify-around bg-pink-100 rounded-md'>
          <div className="flex flex-col">
            <h3 className='text-xl mx-auto'>دسترسی سریع</h3>
            <ul className='h-full flex flex-col justify-between'>
              <li className='mt-1 p-1 bg-purple-300 w-48 rounded-md hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-orange-300'><a href='#!'>خانه</a></li>
              <li className='mt-1 p-1 bg-purple-300 w-48 rounded-md hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-orange-300'><a href='#!'>بلاگ</a></li>
              <li className='mt-1 p-1 bg-purple-300 w-48 rounded-md hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-orange-300'><a href='#!'>نمونه کار</a></li>
              <li className='mt-1 p-1 bg-purple-300 w-48 rounded-md hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-orange-300'><a href='#!'>تعرفه ها</a></li>
              <li className='mt-1 p-1 bg-purple-300 w-48 rounded-md hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-orange-300'><a href='#!'>تماس با ما</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className='text-xl mx-auto'>راه های ارتباط با ما</h3>
            <ul className='h-full flex flex-col justify-between'>
              <li className='text-sm mt-1 py-2 px-3 bg-purple-300 w-56 rounded-md hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-orange-300'><a className='flex gap-x-1' href='#!'>شماره تماس<HiOutlinePhone className='hi-icon' /> : 09123456789</a></li>
              <li className='text-sm mt-1 py-2 px-3 bg-purple-300 w-56 rounded-md hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-orange-300'><a className='flex gap-x-1' href='#!'>تلگرام <SocialIcon style={{width: "20px", height: "20px"}} url='telegram.com' /> : BeautySalon@</a></li>
              <li className='text-sm mt-1 py-2 px-3 bg-purple-300 w-56 rounded-md hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-orange-300'><a className='flex gap-x-1' href='#!'>اینستاگرام<SocialIcon style={{width: "20px", height: "20px"}} url='instagram.com' /> : BeautySalon@</a></li>
              <li className='text-sm mt-1 py-2 px-3 bg-purple-300 w-56 rounded-md hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-orange-300'><a className='flex gap-x-1 text-xs' href='#!'>ایمیل<HiOutlineMail className='hi-icon' />: info@beautysalon.com</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className='text-xl mx-auto'>ما کجای نقشه هستیم</h3>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7926.378210380846!2d51.24413002612058!3d35.756752823440564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8de5f3a58a26d1%3A0xf51e607eb78f34dc!2z2LPYp9mE2YYg2LLbjNio2KfbjNuMINii2YHYp9mC!5e0!3m2!1sen!2s!4v1717618770424!5m2!1sen!2s" 
              width="400" 
              height="250"
              className='rounded-md'  
            >
            </iframe>
          </div>
        </footer>

        {/* <div>
          <h1 className='p-4 text-xl text-secondary-700 text-center'>صفحه اصلی</h1>
          <button className='btn btn--primary mx-auto block'>
            <Link
              to={`customer`}
            >
              ورود به پنل مشتری
            </Link>
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default Home;