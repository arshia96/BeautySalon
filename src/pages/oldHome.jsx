import React from 'react'
import Loading from '../ui/Loading';
import { useNavigate } from 'react-router-dom';
import Header from '../mainpages/header/Header';
import SingleImageCard from '../ui/SingleImageCard';
import { HiOutlineMail, HiOutlinePhone, HiOutlinePlusCircle } from 'react-icons/hi';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';
import CardImageText from '../ui/CardImageText';
import CardImageNoText from '../ui/CardImageNoText';
import CustomNavLink from '../ui/CustomNavLink';
import CustomSocialMediaIcon from '../ui/CustomSocialMediaIcon';
import SingleWideCard from '../ui/SingleWideCard';
import TopHeader from '../mainpages/header/TopHeader';
function Home() {
  const navigate = useNavigate();
  return (
    <div className='h-full bg-pink-50'>
      <div className=''>
        <section>
          <TopHeader />
        </section>

        <section>
          <div 
          className='p-1 text-center rounded-md flex flex-col'  
          style={{height: "80vh", backgroundImage: "url('./images/slider1.jpg')", backgroundPosition: "center", backgroundSize: "cover"}}
          >
            <Header />
            <div className='m-auto flex-col flex gap-y-3 bg-white bg-opacity-55 p-5 rounded-md'>
              <p className='text-2xl text-purple-700 dark:text-purple-200'>یک شعاری رو به ما بسپارید</p>
              <div className='flex gap-x-3 mx-auto'>
                <button 
                  className='flex gap-x-1 px-3 py-1 border border-purple-800 text-purple-800  
                  justify-center rounded-xl transition-all ease-in-out duration-300 hover:bg-purple-800 hover:text-white
                  dark:bg-purple-100 dark:hover:bg-purple-50'
                >
                  تماس با ما <HiOutlinePhone className='hi-icon' />
                </button>
                <button 
                  className='flex gap-x-1 px-3 py-1 border border-purple-800 text-purple-800
                  justify-center rounded-xl transition-all ease-in-out duration-300 hover:bg-purple-800 hover:text-white
                  dark:bg-purple-100 dark:hover:bg-purple-50'
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
              <h2 className='text-2xl text-secondary-900'> ما کی هستیم؟ </h2>
              <p className='text-md w-96 text-justify text-secondary-700'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای نقطه.</p>
              <button className='btn btn--primary flex gap-x-2 justify-center dark:bg-purple-100 dark:hover:bg-purple-50'>
                در مورد ما بیشتر بدانید <HiOutlineArrowTopRightOnSquare className='hi-icon' />
              </button>
            </div>
          </div>
        </section>

        <section className='bg-pink-200 pt-20 pb-28'>
          <section className=''>
            <div className="container xl:max-w-screen-xl grid grid-cols-3 gap-x-5 h-72">
              <CardImageText
              imgSrc = "user.jpg"
              title = "عنوان 1"
              btnText = "بیشتر بدانید"
              onclick={() => {}}
              >
                <p className='text-secondary-600 text-justify m-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و غیره است</p>
              </CardImageText>

              <CardImageText
              imgSrc = "user.jpg"
              title = "عنوان 2"
              btnText = "رزرو تایم"
              btnColor= 'primary'
              onclick={() => {}}
              >
                <p className='text-secondary-600 text-justify m-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و غیره است</p>
              </CardImageText>

              <CardImageText
              imgSrc = "user.jpg"
              title = "عنوان 3"
              btnText = "بیشتر بدانید"
              onclick={() => {}}
              >
                <p className='text-secondary-600 text-justify m-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و غیره است</p>
              </CardImageText>
            </div>
          </section>

          <section className=''>
            <div className="mt-28 container xl:max-w-screen-xl grid grid-cols-2 gap-x-10 h-80">
              <CardImageNoText imgSrc="images/rightside.jpg" title="عنوان سمت راست" btnText="کلیک کنید" onclick={() => {}} />
              <CardImageNoText imgSrc="images/leftside.jpg" title="عنوان سمت چپ" btnText="کلیک کنید" onclick={() => {}} />
            </div>
          </section>
        </section>

        <section className=''>
          <div className='mt-10 container xl:max-w-screen-xl flex gap-x-10 justify-center' style={{height: "50vh"}}>
            <SingleWideCard
              imgSrc="images/artist.jpg"
              title="هنرمندان ما"
              buttonText=" مشاهده اعضای تیم "
              onclick={() => {}}
            >
              <p className='text-md text-justify w-10/12 text-secondary-700'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای نقطه.</p>
              <p className='text-md text-justify w-10/12 text-secondary-700'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای نقطه.</p>
            </SingleWideCard>
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
            <h2 className='text-center text-2xl font-bold mb-20 text-secondary-900'>خدمات ما</h2>
            <div className='grid grid-cols-3 gap-x-5'>
              <SingleImageCard
                imgSrc="images/leftside.jpg"
                title="عنوان 1"
                btnText="بیشتر بدانید"
                onclick={() => {}}
              >
                <p className='text-secondary-600 text-justify m-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و غیره است</p>
              </SingleImageCard>

              <SingleImageCard
                imgSrc="images/artist.jpg"
                title="عنوان 2"
                btnText="بیشتر بدانید"
                onclick={() => {}}
              >
                <p className='text-secondary-600 text-justify m-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و غیره است</p>
              </SingleImageCard>
              
              <SingleImageCard
                imgSrc="images/rightside.jpg"
                title="عنوان 3"
                btnText="بیشتر بدانید"
                onclick={() => {}}
              >
                <p className='text-secondary-600 text-justify m-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و غیره است</p>
              </SingleImageCard>
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
      </div>
    </div>
  )
}

export default Home;