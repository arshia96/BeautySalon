import React, { useEffect } from 'react'
import TextField from '../../ui/TextField'
//import { useMutation } from '@tanstack/react-query';
//import { completeProfile } from '../../services/authService';
import toast from 'react-hot-toast';
//import Loading from '../../ui/Loading';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import RadioInputGroup from '../../ui/RadioInputGroup';

const ROLEUrls = {
  ADMIN : "/admin",
  FREELANCER : "/freelancer", 
  OWNER : "/owner"
}
function CompleteProfileForm() {
    const { handleSubmit, register, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    // const {mutateAsync, isPending} = useMutation({
    //     mutationFn: completeProfile
    // })
    const onSubmit = async (data) => {
        console.log(data);
        toast("اوکی", {
                icon: '👍',
        });
        // try {
        //     const { user, message } = await mutateAsync(data);
        //     toast.success(message);
        //     if (user.status !== 2) {
        //         navigate("/");
        //         toast("پروفایل شما در انتظار تایید است", {
        //             icon: '👨🏻‍💻',
        //         });
        //         return;
        //     }
        //     if (Object.keys(ROLEUrls).includes(user.role)) return navigate(`${ROLEUrls[user.role]}`);
        // }
        // catch (error) {
        //     toast.error(error?.response?.data?.message);
        // }
    }
  return (
    <div className="flex flex-col gap-y-6 items-center pt-10">
        <h1 className='font-bold text-3xl text-secondary-700'>تکمیل اطلاعات</h1>
        <div className='w-full sm:max-w-sm'>
            <form className='space-y-8' onSubmit={handleSubmit(onSubmit)}>
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
                />
                {/* <TextField 
                    label="ایمیل" 
                    name="email" 
                    register={register}
                    validationSchema={{
                        required: "ایمیل ضروری است",
                        pattern : {
                            value : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message : "ایمیل نامعتبر است"
                        }
                    }}
                    errors={errors}
                /> */}
                <RadioInputGroup
                    errors={errors}
                    register={register}
                    watch={watch}
                    configs={{
                        name: "role", 
                        validationSchema : { required : "انتخاب نقش ضروری است" },
                        options : [
                            {
                                value : "WOMAN",
                                label : "خانم" ,
                            },
                            {
                                value : "MAN",
                                label : "آقا" ,
                            }
                        ]
                    }}
                />
                
                {/* {isPending ? <Loading /> : (
                    <button className='btn btn--primary w-full'>
                        تایید
                    </button>
                )} */}
                <button className='btn btn--primary w-full'>
                    تایید
                </button>
            </form>
        </div>
    </div>
    
  )
}

export default CompleteProfileForm