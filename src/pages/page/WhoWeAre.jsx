import React from 'react'
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2'
import CardImageNoText from '../../ui/CardImageNoText';
import SingleWideCard from '../../ui/SingleWideCard';
import CardImageText from '../../ui/CardImageText';

function WhoWeAre() {

  return (
    <div className=''>
      <section className='h-32 bg-purple-950 text-center content-center'>
        <p className='text-4xl text-white mx-auto my-auto'>ما کی هستیم</p>
      </section>
      
      <section className=''>
        <div className='mt-10 container xl:max-w-screen-xl flex gap-x-4 justify-center' style={{height: "60vh"}}>
          <div className="before-dots after-dots w-2/3 relative">
            <div className='w-1/2 relative'>
              <div className='absolute right-44 top-0 w-48'>
                <img className='h-96 w-48 rounded-md' src="../images/1-1.jpg" alt="" />
              </div>
            </div>
            <div className='w-1/2 relative'>
              <div className='absolute right-96 top-10 w-48'>
                <img className='h-96 w-44 rounded-md' src="../images/1-2.jpg" alt="" />
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

      <section className=''>
        <div className="mt-10 container xl:max-w-screen-xl grid grid-cols-2 gap-x-10 h-96">
          <CardImageNoText imgSrc="../images/rightside.jpg" title="عنوان سمت راست" btnText="کلیک کنید" onclick={() => {}} />
          <CardImageNoText imgSrc="../images/leftside.jpg" title="عنوان سمت چپ" btnText="کلیک کنید" onclick={() => {}} />
        </div>
      </section>

      <section className=''>
        <div className='mt-16 container xl:max-w-screen-xl flex gap-x-10 justify-center' style={{height: "50vh"}}>
          <SingleWideCard
            imgSrc="../images/artist.jpg"
            title="هنرمندان ما"
            buttonText=" مشاهده اعضای تیم "
            onclick={() => {}}
          >
            <p className='text-md text-justify w-10/12 text-secondary-700'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای نقطه.</p>
            <p className='text-md text-justify w-10/12 text-secondary-700'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای نقطه.</p>
          </SingleWideCard>
        </div>
      </section>

      <section className=''>
        <div className="mt-12 container xl:max-w-screen-xl grid grid-cols-3 gap-x-5 min-h-72 max-h-fit">
          <CardImageText
          imgSrc = "../user.jpg"
          title = "عنوان 1"
          btnText = "بیشتر بدانید"
          onclick={() => {}}
          >
            <p className='text-secondary-600 text-justify m-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و غیره است</p>
          </CardImageText>

          <CardImageText
          imgSrc = "../user.jpg"
          title = "عنوان 2"
          btnText = "رزرو تایم"
          btnColor= 'primary'
          onclick={() => {}}
          >
            <p className='text-secondary-600 text-justify m-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و غیره است</p>
          </CardImageText>

          <CardImageText
          imgSrc = "../user.jpg"
          title = "عنوان 3"
          btnText = "بیشتر بدانید"
          onclick={() => {}}
          >
            <p className='text-secondary-600 text-justify m-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و غیره است</p>
          </CardImageText>
        </div>
      </section>

    </div>
  )
}

export default WhoWeAre;