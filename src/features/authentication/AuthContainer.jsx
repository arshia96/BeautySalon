import React, { useState } from 'react'
import SendOTPForm from './SendOTPForm';
import GetOTPForm from './GetOTPForm';
import NotFound from '../../pages/NotFound';

function AuthContainer() {
    const style = { 
        backgroundImage: `url('images/background.jpg')`, 
        backgroundPosition: "center",
        backgroundSize: "cover", 
        backgroundRepeat: "no-repeat",
    }
    const [step, setStep] = useState(1);
    const [method, setMethod] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    return (
        <div className='h-screen w-full' style={style}>
            <div className='bg-secondary-50 h-screen bg-opacity-10 flex flex-col overflow-hidden'>
            {step===1 ? (
                <SendOTPForm setStep={setStep} setMethod={setMethod} setEmail={setEmail} setPhoneNumber={setPhoneNumber} />
            ) : step===2 ? (
                <GetOTPForm
                 wayOtp={method === "email" ? email : method === "phoneNumber" ? phoneNumber : "Error"}
                 onBack={() => setStep(1)} 
                 onReSendOtp = {() => {}} 
                 otpResponse={
                    method === "email" ? {message: `کدتایید به ایمیل ${email} ارسال گردید`}
                    : 
                    method === "phoneNumber" ? {message: `کدتایید به شماره ${phoneNumber} ارسال گردید`}
                    :
                    "مشکلی در ارسال کدتایید بوجود آمده است"
                 }
                />
            ) : (
                <NotFound />
            )}
            </div>
        </div>
    )
}

export default AuthContainer;