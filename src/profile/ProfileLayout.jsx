import React, { useState } from 'react'
import useUser from '../authentication/useUser'
import Loading from '../../ui/Loading';
import { useForm } from 'react-hook-form';
import TextField from '../../ui/TextField';
import { updateUserApi } from '../../services/authService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { HiOutlineTrash } from 'react-icons/hi';
import useRemoveUser from '../authentication/useRemoveUser';

function ProfileLayout() {
  const queryClient = useQueryClient();
  const [ deleteOpen, setDeleteOpen ] = useState(false);
  const { isLoading, user } = useUser();
  console.log(user._id);
  const { _id, name, email, phoneNumber, biography } = user;
  const { isDeleting, removeUser } = useRemoveUser();
  const { register, handleSubmit, formState: {errors} } = useForm({
    defaultValues: {
      name: name,
      email: email, 
      phoneNumber: phoneNumber, 
      biography: biography
    }
  });
  const { mutateAsync, isPending } = useMutation({
    mutationFn: updateUserApi,
  })
  const onSubmit = async (data) => {
    try {
      const newData = {
        email : email, 
        ... data
      }
      const { message } = await mutateAsync(newData);
      toast.success(message);
      queryClient.invalidateQueries({
        queryKey : ["user"]
      });
    }
    catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
  if (isLoading) return <Loading />
  return (
    <div className="flex flex-col gap-y-4 justify-between text-secondary-700">
      <h1 className='font-bold text-2xl text-secondary-700 mb-4'>پروفایل</h1>
        <div className='w-full lg:max-w-xl'>
        <form className='space-y-6 mb-6' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-row gap-x-4 justify-between'>
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
              className = "bg-secondary-0 border border-secondary-50 w-64"
            />
            <TextField 
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
                className = "w-72"
                disabled
            />
          </div>
          <div className='flex flex-col gap-y-6'>
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
            <TextField 
                label="درباره من" 
                name="biography" 
                register={register}
                errors={errors}
                size="large"
                className = "bg-secondary-0 border border-secondary-50"
            />
          </div>
          {isPending ? <Loading /> : (
            <button className='btn btn--primary w-full'>
              بروزرسانی
            </button>
          )}
          
        </form>
        <div className='flex items-center h-5'>
            <Modal
                open={deleteOpen} 
                onClose={() => setDeleteOpen(false)} 
                title={`حذف حساب کاربری`} 
            >
                {isDeleting ? (
                    <Loading />
                ) : (
                    <ConfirmDelete
                        resourceName={"حساب کاربری خود"} 
                        onClose={() => setDeleteOpen(false)} 
                        onConfirm={() => removeUser(_id, { 
                            onSuccess: () => {
                                navigate('/auth');
                            }
                        })} 
                        disabled={false}
                    />
                )}
            </Modal> 
            <button onClick={() => setDeleteOpen(true)} 
              className='btn btn--danger text-center flex p-2 w-full justify-center gap-x-2'>
              <HiOutlineTrash className='hi-icon text-rose-700' /><span>حذف حساب کاربری</span>
            </button>
          </div>
      </div>
    </div>
  )
}
export default ProfileLayout;