import React, { useState } from 'react'
import SendOTPForm from './SendOTPForm';
import GetOTPForm from './GetOTPForm';
import NotFound from '../../pages/NotFound';
import CompleteProfileForm from './CompleteProfileForm'
import { useMutation } from '@tanstack/react-query';
import { registerOtp } from '../../services/authService';
import toast from 'react-hot-toast';
function AuthContainer() {
    const bgStyle = { 
        backgroundImage: `url('images/background.jpg')`, 
        backgroundPosition: "center",
        backgroundSize: "cover", 
        backgroundRepeat: "no-repeat",
    }
    const [step, setStep] = useState(1);
    const [method, setMethod] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [ registerInfo, setRegisterInfo ] = useState({});
    const { isPending:isSendingOtp, mutateAsync, data:otpResponse } = useMutation({
        mutationFn: registerOtp
    });
    const sendOtpHandler = async (data) => {
        try {
          const { message } = await mutateAsync(data);
          setStep(2);
          toast.success(message);
          console.log("otp sent");
        } 
        catch (error) {
          toast.error(error?.message);
        }
    };
    return (
        <div className='h-screen w-full' style={bgStyle}>
            <div className='bg-secondary-50 h-screen bg-opacity-10 flex flex-col overflow-hidden'>
            {
            step===1 ? (
                <SendOTPForm setStep={setStep} setMethod={setMethod} setRegisterInfo={setRegisterInfo} sendOtpHandler={sendOtpHandler} />
            ) : step===2 ? (
                <GetOTPForm
                 wayOtp={method === "email" ? registerInfo.email : method === "phone" ? registerInfo.phone : "Error"}
                 onBack={() => setStep(1)}
                 onReSendOtp = {() => {}}
                 setStep={setStep}
                 otpResponse={
                    method === "email" ? {message: `کدتایید به ایمیل ${registerInfo.email} ارسال گردید`}
                    : 
                    method === "phone" ? {message: `کدتایید به شماره ${registerInfo.phone} ارسال گردید`}
                    :
                    "مشکلی در ارسال کدتایید بوجود آمده است"
                 }
                 setRegisterInfo={setRegisterInfo}
                 registerInfo={registerInfo}
                />
            ) : step===3 ? (
                <CompleteProfileForm phone={registerInfo.phone} email={registerInfo.email} otp={registerInfo.otp} />
            ) : (
                <NotFound />
            )}
            </div>
        </div>
    )
}

export default AuthContainer;