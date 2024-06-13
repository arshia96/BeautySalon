import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input'
// import { checkOtp } from '../../services/authService';
// import toast from'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Loading from '../../ui/Loading';
import { useReadOTP } from 'react-read-otp';

const RESEND_TIME = 90;
const ROLEUrls = {
  USER : "/",
  ADMIN : "/admin",
  FREELANCER : "/freelancer", 
  OWNER : "/owner"
}

function CheckOTPForm({ phoneNumber = '', email = '', onBack, onReSendOtp, otpResponse }) {
    const [otp, setOtp] = useState('');
    useReadOTP(setOtp);
    const [time, setTime] = useState(RESEND_TIME);
    const navigate = useNavigate();
    // const { isPending, mutateAsync } = useMutation ({
    //     mutationFn: checkOtp,
    // });
    const checkOtpHandler = async (e) => {
      e.preventDefault();
      console.log("ok");
    //   try {
    //     const {message, user} = await mutateAsync({phoneNumber, otp});
    //     toast.success(message);
    //     if (!user.isActive) return navigate('/complete-profile');
    //     if (user.status !== 2) {
    //       navigate("/");
    //       toast("پروفایل شما در انتظار تایید است", {
    //         icon: '👨🏻‍💻',
    //       });
    //       return;
    //     }
    //     if (Object.keys(ROLEUrls).includes(user.role)) return navigate(`${ROLEUrls[user.role]}`);
    //   }
    //   catch (error) {
    //     toast.error(error?.response?.data?.message);
    //   }
    }
    
    useEffect(() => {
      const timer = time > 0 && setInterval(() => setTime((t) => t-1), 1000);
      return () => {
        if (timer) clearInterval(timer);
      }
    }, [time]);
    
  return (
    <div className='m-auto p-10 w-auto max-w-96 bg-secondary-100 bg-opacity-85 rounded-xl'>
      <button onClick={onBack}>
        <HiArrowRight className='w-6 h-6 text-secondary-500' />
      </button>
      
      {otpResponse && (
        <p className='flex items-center gap-x-2 my-4 text-secondary-900'>
          <span>
            {otpResponse?.message} 
          </span>
          <button onClick={onBack}>
            <CiEdit className='w-6 h-6 text-secondary-500'/>
          </button>
        </p>
      )}

      <div className="text-secondary-500 mb-3">
        {time > 0 ? (
          <p> {time} ثانیه تا ارسال مجدد کد </p>
        ) : (
          <button onClick={() => {
            onReSendOtp();
            setTime(RESEND_TIME);
          }}>ارسال مجدد کد تایید</button>
        )}
      </div>

      <form className='space-y-10' onSubmit={checkOtpHandler}>
          <p className='font-bold text-secondary-800'>کد تایید را وارد کنید</p>
          <OTPInput 
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span className='text-secondary-700'>-</span>}
              renderInput={(props) => <input type='number' { ... props } />}
              containerStyle="flex flex-row-reverse gap-x-2 justify-center"
              inputStyle={{width: '2.5rem', padding: '0.5rem 0.2rem', 
              border: '1px solid rgb(192 132 252)', borderRadius: '0.5rem', 
              background: 'rgb(var(--color-secondary-0))', color: 'rgb(var(--color-secondary-900))'}}
              onPaste={checkOtpHandler}
              inputType='tel'
          />
          
          <div>
              {/* {isPending ? <Loading /> : ( */}
                <button className='btn btn--primary w-full'>
                  تایید 
                </button>
              {/* )} */}
            </div>
          
      </form>

    </div>
  )
}

export default CheckOTPForm