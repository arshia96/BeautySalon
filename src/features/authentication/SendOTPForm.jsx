import React from 'react'
import { useForm } from 'react-hook-form'
import TextField from '../../ui/TextField';
import Form from '../../ui/Form';

function SendOTPForm({ setStep }) {
    const { register, handleSubmit, formState:{errors} } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        // if data is ok
        setStep(2);
    }
    return (
        <div className='m-auto p-10 w-96 h-96 bg-secondary-100 bg-opacity-85 rounded-xl flex flex-col justify-center'>
            <Form className="space-y-3" onsubmit={() => handleSubmit(onSubmit)}>
                <TextField
                    label="شماره تلفن یا ایمیل"
                    className='border border-purple-50' 
                    type="tel" 
                    name="phoneNumber" 
                    validationSchema = {{
                        // minLength :{
                        //     value: 8, 
                        //     message: "شماره تلفن خود را درست وارد کنید" 
                        // },
                        pattern : {
                            value : /^(?:\d{11}|[A-Z0-9._%+-]+@\w+\.\w{2,3})$/i,
                            message : "ایمیل یا شماره تلفن نامعتبر است"
                        }
                    }}
                    register={register}
                    required = {true}
                    errors={errors}
                />
                <button className='btn btn--primary w-full'>تایید</button>
            </Form>
        </div>
    )
}

export default SendOTPForm;