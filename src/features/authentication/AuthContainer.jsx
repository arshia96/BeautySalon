import React, { useState } from 'react'
import Form from '../../ui/Form'
import TextField from '../../ui/TextField';
import { useForm } from 'react-hook-form';
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
    return (
        <div className='flex flex-col h-screen overflow-hidden' style={style}>
            {step===1 ? (
                <SendOTPForm setStep={setStep} />
            ) : step===2 ? (
                <GetOTPForm phoneNumber="09202462411" onBack={() => setStep(1)} onReSendOtp = {() => {}} otpResponse={{message: "کدتایید به شماره 09202462411 ارسال گردید"}} />
            ) : (
                <NotFound />
            )}
        </div>
    )
}

export default AuthContainer;