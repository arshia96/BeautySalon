import React, { useEffect, useState } from 'react'
import TextField from '../../ui/TextField'
//import { useMutation } from '@tanstack/react-query';
import { verifyOtp } from '../../services/authService';
import toast from 'react-hot-toast';
//import Loading from '../../ui/Loading';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import RadioInputGroup from '../../ui/RadioInputGroup';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useMutation } from '@tanstack/react-query';
import Loading from '../../ui/Loading';

const ROLEUrls = {
  ADMIN : "/admin",
  FREELANCER : "/freelancer", 
  OWNER : "/owner"
}
function CompleteProfileForm({ phone, email, otp }) {
    const { handleSubmit, register, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [ isShowPassword, setIsShowPassword ] = useState(false);
    const { mutateAsync, isPending } = useMutation({
        mutationFn: verifyOtp
    })
    const onSubmit = async (data) => {
        console.log(data);
        toast("اوکی", {
                icon: '👍',
        });
        //console.log(data.re_password);
        data = {...data, email, otp, phone}
        console.log(data);
        try {
            const { message } = await mutateAsync(data);
            toast.success(message);
        }
        catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }
  return (
    <div className='m-auto p-10 w-auto min-w-fit max-w-96 bg-secondary-100 bg-opacity-85 rounded-xl'>
    {/* <div className="flex flex-col gap-y-6 items-center pt-10"> */}
        <h1 className='font-bold text-3xl mb-5 text-secondary-700'>تکمیل فرم ثبت نام</h1>
        <div className='w-full sm:max-w-sm min-w-72'>
            <form className='space-y-8' onSubmit={handleSubmit(onSubmit)}>
            <div className="relative h-24">
                <TextField
                    label="رمز عبور"
                    className='border border-purple-50' 
                    type= {isShowPassword ? "text" : "password" }
                    name="password" 
                    validationSchema = {{
                        pattern : {
                            value : /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/, //(?=.*?[#?!@$%^&*-])
                            message : "حداقل 8 کاراکتر، حروف بزرگ و کوچک و اعداد"
                        }
                    }}
                    register={register}
                    required = {true}
                    errors={errors}
                />
                <span className='absolute left-5 top-12 cursor-pointer w-fit' onClick={() => setIsShowPassword(!isShowPassword)}>
                    {isShowPassword 
                    ? <HiEye className='hi-icon text-secondary-400' title='نمایش رمزعبور' /> 
                    : <HiEyeOff className='hi-icon text-secondary-400' title='پنهان کردن' /> 
                    }
                </span>
            </div>
            <div className="relative h-24">
                <TextField
                    label="تکرار رمز عبور"
                    className='border border-purple-50' 
                    type= {isShowPassword ? "text" : "password" }
                    name="re_password" 
                    validationSchema = {{
                        validate: (val) => {
                            if (watch('password') != val) {
                              return "با رمزعبور تطابق ندارد";
                            }
                        }
                    }}
                    register={register}
                    required = {true}
                    errors={errors}
                />
            </div>
                {isPending ? <Loading /> : (
                    <button className='btn btn--primary w-full'>
                        تایید
                    </button>
                )}
            </form>
        </div>
    </div>
    
  )
}

export default CompleteProfileForm