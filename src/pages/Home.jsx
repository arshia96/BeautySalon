import React from 'react'
import Loading from '../ui/Loading';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../mainpages/header/Header';
import SingleImageCard from '../ui/SingleImageCard';
import SingleTextCard from '../ui/SingleTextCard';

function Home() {
  const navigate = useNavigate();
  return (
    <div className='bg-secondary-0'>
      <div className='container h-screen xl:max-w-screen-xl'>
        <section>
          <div 
          className='p-1 text-center rounded-md' 
          style={{height: "66vh", backgroundImage: "url('./images/5456624.jpg')", backgroundPosition: "center", backgroundSize: "cover"}}
          >
            <Header />
          </div>  
        </section>

        <section>
          <div className='flex flex-row gap-x-5 h-96 rounded-md'>
            <div className='w-1/2 h-full p-5 items-center'>
              <SingleImageCard text="Sample Text" buttonText="Click Me !" imgSource="/images/5456624.jpg" onClick={ () => {} } />
            </div>
            <div className='w-1/2 h-full p-5'>
              <SingleTextCard>
                <p className='text-secondary-900'>
                  {/* plorem <= برای لورم فارسی دستور*/}
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
              </SingleTextCard>
            </div>
          </div>
        </section>

        <div className='mt-96'>
          <h1 className='p-4 text-xl text-secondary-700 text-center'>صفحه اصلی</h1>
          <button className='btn btn--primary mx-auto block'>
            <Link
              to={`customer`}
            >
              ورود به پنل مشتری
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home