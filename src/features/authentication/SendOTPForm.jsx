import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextField from '../../ui/TextField';
import Form from '../../ui/Form';
import { HiEye, HiEyeOff } from 'react-icons/hi';

function SendOTPForm({ setStep, setEmail, setPhone, sendOtpHandler, setMethod, setRegisterInfo }) {
    const { register, handleSubmit, formState:{errors} } = useForm();
    const [isUsePassword, setIsUsePassword] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const onSubmit = async (data) => {
        var regexPhone = new RegExp('^(\\+98|0)?9\\d{9}$');
        var resultPhone = regexPhone.test(data.loginMethod);
        var regexEmail = new RegExp(/^(?:[A-Z0-9._%+-]+@\w+\.\w{2,3})$/i);
        var resultEmail = regexEmail.test(data.loginMethod); 
        // if(isUsePassword) {
        //     var resultPassword = data.password;
        //     // ...
        //     // setStep(3);
        // }
        
        if (resultPhone) {
            console.log("this should sent to phone api");
            setMethod("phone");
            setRegisterInfo({ phone: data.loginMethod });
            sendOtpHandler({ phone: data.loginMethod });
        }
        else if (resultEmail) {
            console.log("this should sent to email api");
            console.log(data.loginMethod);
            setMethod("email");
            setRegisterInfo({ email: data.loginMethod });
            sendOtpHandler({ email: data.loginMethod });
        }
        console.log("register function ok");
        return setStep(2);
        
    }
    return (
        <div className='m-auto p-10 w-96 max-h-fit bg-secondary-100 bg-opacity-85 rounded-xl flex flex-col justify-center'>
            <h1 className='mb-5 text-xl'>{isRegistering ? "ثبت نام" : "ورود"}</h1>
            <Form className="space-y-3 flex flex-col" onsubmit={() => handleSubmit(onSubmit)}>
                <TextField
                    label="شماره تلفن یا ایمیل"
                    className='border border-purple-50' 
                    type="tel" 
                    name="loginMethod"
                    validationSchema = {{
                        pattern : {
                            value : /^(?:\d{11}|[A-Z0-9._%+-]+@\w+\.\w{2,3})$/i,
                            message : "ایمیل یا شماره تلفن نامعتبر است"
                        }
                    }}
                    register={register}
                    required = {true}
                    errors={errors}
                />
                {isUsePassword && !isRegistering ? (
                    <div className="relative h-28">
                        <TextField
                            label="رمز عبور"
                            className='border border-purple-50' 
                            type= { isShowPassword ? "text" : "password" }
                            name="password" 
                            validationSchema = {{
                                pattern : {
                                    value : /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/, //(?=.*?[#?!@$%^&*-])
                                    message : "حداقل 8 کاراکتر، حروف بزرگ و کوچک و اعداد"
                                }
                            }}
                            register={register}
                            required = {true && isUsePassword}
                            errors={errors}
                        />
                        <span className='absolute left-5 top-12 cursor-pointer w-fit' onClick={() => setIsShowPassword(!isShowPassword)}>
                            {isShowPassword 
                            ? <HiEyeOff className='hi-icon text-secondary-400' title='پنهان کردن' /> 
                            : <HiEye className='hi-icon text-secondary-400' title='نمایش رمزعبور' /> 
                            }
                        </span>
                    </div>
                ) : ("")}

                {!isRegistering && (
                    <p className='underline text-secondary-800 cursor-pointer w-fit' onClick={() => setIsUsePassword(!isUsePassword)}>
                        ورود با {isUsePassword ? "کد تایید" : "رمزعبور"}
                    </p>
                )}
                <p className='underline text-secondary-800 cursor-pointer w-fit' onClick={() => setIsRegistering(!isRegistering)}>
                    {isRegistering ? "ورود" : "ثبت نام"}
                </p>
                <button className='btn btn--primary w-full'>{isRegistering ? "ثبت نام" : "ورود"}</button>
            </Form>
        </div>
    )
}

export default SendOTPForm;