import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import TextField from '../../../ui/TextField';
import { HiOutlineTrash, HiPencil, HiPlusCircle, HiXCircle } from 'react-icons/hi';
import { HiArrowLeftCircle } from 'react-icons/hi2';
import FileField from '../../../ui/FileField';
import ImageCropper from '../../../ui/ImageCropper';

function ProfileLayout() {
  const [ openOptions, setOpenOptions ] = useState(false);

  const [ openCropper, setOpenCropper ] = useState(false);
  const [ image, setImage ] = useState();
  const [ cropImage, setCropImage ] = useState('');
  const onChangeProfile = (e) => {
    e.preventDefault();
    setOpenCropper(true);
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setCropImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };
  const uploadChangeHandle = () => {
    setOpenOptions(false);
    setOpenCropper(false);
  }

  const { register, handleSubmit, formState: {errors} } = useForm({
    defaultValues: {
      name: 'مشتری تست',
      email: 'email@gmail.com', 
      phoneNumber: '09120000000', 
      biography: 'بیوگرافی'
    }
  });

  return (
  <div className="flex flex-col gap-y-4 justify-between text-secondary-700">
    <div className='flex flex-row items-center justify-between w-2/3 mx-auto'>
      <div>
        <h1 className='font-bold text-2xl text-secondary-700'>پروفایل</h1>
      </div>
      <div className='flex items-center h-5'>
        <button className='btn btn--danger text-center flex p-2 w-full justify-center gap-x-2'>
          <HiOutlineTrash className='hi-icon text-rose-700' /><span>حذف حساب کاربری</span>
        </button>
      </div>
    </div>
      
      <form className='space-y-6 mb-6 mx-auto' onSubmit={handleSubmit(console.log("ok form profile"))}>
        <div className='flex flex-row gap-x-8'>
          <div className='flex flex-col gap-y-10'>
            <div className='relative w-80 my-auto'>
                <img src={image ? image : "../user.jpg"} name='avatar' alt="avatar" className='rounded-full w-3/5 mx-auto' />
                {openOptions ? (
                  <HiArrowLeftCircle
                    className='w-10 h-10 rounded-full absolute left-14 -bottom-1 cursor-pointer text-primary-800 border-2 border-primary-900 p-0.5'
                    onClick={() => setOpenOptions(!openOptions)}
                  />
                ) : (
                  <HiPencil 
                    title='ویرایش تصویر پروفایل'
                    className='w-10 h-10 rounded-full absolute left-14 -bottom-1 cursor-pointer text-primary-800 border-2 border-primary-900 p-0.5'
                    onClick={() => setOpenOptions(!openOptions)}
                  />
                )}
                {openOptions && (
                  <div className='transition-all duration-300 ease-in-out'>
                    <FileField onChange={onChangeProfile}>
                      <HiPlusCircle title='افزودن جدید' className='w-10 h-10 rounded-full absolute left-24 bottom-3 cursor-pointer text-primary-800 hover:animate-pulse' />
                    </FileField>
                    <HiXCircle title='حذف' className='w-8 h-8 rounded-full absolute left-24 -bottom-5 cursor-pointer text-error hover:animate-pulse' onClick={() => setOpenOptions(false)} />
                  </div>
                )}
                <ImageCropper image={cropImage} open={openCropper} setImage={setImage} onClose={() => uploadChangeHandle()} />
            </div>
          </div> 
          <div className='flex flex-col gap-y-6 w-80'>
            <TextField
                label="نام و نام خانوادگی" 
                name="name"
                register={register}
                validationSchema={{
                  required: "نام و نام خانوادگی ضروری است",
                  minLength: {
                    value: 6, 
                    message: "نام خود را کامل وارد کنید"   
                  } 
                }}
                errors={errors}
                className = "bg-secondary-0 border border-secondary-50"
            />
            <TextField 
              title="قابل ویرایش نمی باشد"
              label="ایمیل" 
              name="email" 
              register={register}
              disabled
            />
            <TextField 
                label="شماره تماس" 
                name="phoneNumber" 
                register={register}
                validationSchema={{
                  required: "شماره تماس ضروری است",
                }}
                errors={errors}
                type='number'
                className = "bg-secondary-0 border border-secondary-50"
            />
          </div>
        </div>
        <div className='flex flex-col gap-y-3'>
          <TextField 
            label="درباره من" 
            name="biography" 
            register={register}
            errors={errors}
            size="large"
            className = "bg-secondary-0 border border-secondary-50 min-h-20"
          />
          <button className='btn btn--primary w-full'>
            بروزرسانی
          </button>
        </div>
      </form>
    </div>
  )
}
export default ProfileLayout;