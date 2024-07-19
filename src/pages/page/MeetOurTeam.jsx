import React, { useState, useEffect } from 'react'
import SingleWideCard from '../../ui/SingleWideCard'
import ImageGallery from '../../ui/ImageGallery';
import TeamGallery from '../../ui/TeamGallery';
import { NavLink } from 'react-router-dom';
import Footer from '../../ui/Footer';

function MeetOurTeam() {
    const data = [
        {
            name: "سارا",
            image: "../images/1-1.jpg",
            job: "ناخن"
        },
        {
            name: "ملیکا",
            image: "../images/artist.jpg",
            job: "مژه"
        },
        {
            name: "نازنین",
            image: "../images/slider1.jpg",
            job: "ابرو"
        },
        {
            name: "ساجده",
            image: "../images/1-1.jpg",
            job: "ناخن"
        },
        {
            name: "خاطره",
            image: "../images/artist.jpg",
            job: "مژه"
        },
        {
            name: "حنا",
            image: "../images/slider1.jpg",
            job: "ابرو"
        }
    ]
    const [ job, setJob ] = useState("همه");
    useEffect(() => {
        
        if (job === "همه") {
            return setMembers(data);
        }
        return setMembers(data.filter(a => a.job === job));
    }, [job]);
    const [ members, setMembers ] = useState(data);
  return (
    <div className=''>
        <section className='h-32 bg-purple-950 text-center content-center'>
            <p className='text-4xl text-white mx-auto my-auto'>اعضای تیم ما</p>
        </section>

        <section>
            <div className='container xl:max-w-screen-lg max-h-48 p-5'>
                <p className='text-secondary-800 mx-auto my-auto'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
            </div>
        </section>

        <section className=''>
          <div className='mt-5 container xl:max-w-screen-xl flex gap-x-10 justify-center' style={{height: "50vh"}}>
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

        <section>
            <div className='space-y-5 text-secondary-800'>
                <h3 className='text-2xl text-center'>اپراتور های ما</h3>
                <ul className='flex flex-row gap-x-8 justify-center'>
                    <li className={`cursor-pointer ${job === "همه" && "underline underline-offset-8"}`} onClick={() => { setJob("همه") }}>همه</li>
                    <li className={`cursor-pointer ${job === "ناخن" && "underline underline-offset-8"}`} onClick={() => { setJob("ناخن") }}>ناخن</li>
                    <li className={`cursor-pointer ${job === "مژه" && "underline underline-offset-8"}`} onClick={() => { setJob("مژه") }}>مژه</li>
                    <li className={`cursor-pointer ${job === "ابرو" && "underline underline-offset-8"}`} onClick={() => { setJob("ابرو") }}>ابرو</li>
                    <li className={`cursor-pointer ${job === "پوست" && "underline underline-offset-8"}`} onClick={() => { setJob("پوست") }}>پوست</li>
                </ul>
            </div>
                {members.length > 0 ? (
                    <TeamGallery data={members} />
                ) : (
                    <p className='m-5 text-xl text-center'>اپراتوری یافت نشد</p>
                )}
        </section>
    </div>
  )
}

export default MeetOurTeam;