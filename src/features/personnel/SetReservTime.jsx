import React, { useEffect, useState } from 'react'
import TimeItem from '../../ui/TimeItem';
import { useForm } from 'react-hook-form';
import DatePickerField from '../../ui/DatePickerField';
import RHFSelect from '../../ui/RHFSelect';
import TimePickerField from '../../ui/TimePickerField';

function SetReservTime({ times }) {
  const options = [
    {
      label:"",
      value: null
    },
    {
      label: "ناخن کاری",
      value: "nailService"
    },
    {
      label: "کاشت مژه",
      value: "eyelashService"
    }
  ]
  const [ time, setTime1] = useState('');
  const [ date, setDate ] = useState(() => {
    const d = new Date().toISOString();
    return `${d.year}/${d.month?.number}/${d.day}`;
  });
  const [ dateNullError, setDateNullError ] = useState(false);
  const [ dateData, setDateData ] = useState([]);
  const [ timesOnDay, setTimesOnDay ] = useState([]);
  const [ service, setService ] = useState();
  const { register, handleSubmit, formState:{ errors } } = useForm({
    defaultValues: {
      service:null
    }
  });
  
  const [ selectedTime, setSelectedTime ] = useState("");

  const handleTime = () => {
    var adate = `${date.year}/${date.month.number}/${date.day}`;
    if(Object.keys(times).includes(adate)){
      setDateData(times[adate].filter(item => item.service === service));
      setTimesOnDay(dateData.map(i => i.times));
      console.log(times);
    }
    else {
      setDateData([]);
    }
  }
  const handleForm = (data) => {
    if (!date) return setDateNullError(true);
    reset();
    setService(data.service);
    handleTime();
  }
  const reset = () => {
    setDateData([]);
    setDateNullError(false);
    setSelectedTime('');
    setTimesOnDay([]);
  }
  
  return (
    <div className="flex flex-row gap-x-10 h-96 mx-auto">
      <div className="flex flex-col gap-y-10 justify-center mx-auto mt-10 w-1/4 h-96">
        <div>
          <DatePickerField 
            date={date}
            setDate={setDate}
            label="روز موردنظر خود را انتخاب کنید" 
            required
          />
          {dateNullError && (
            <p className="text-right text-error mt-1">روز را وارد کنید</p>
          )}
          {/* <TimePickerField 
            time={time}
            setTime={setTime1}
            label="زمان موردنظر خود را انتخاب کنید" 
            required
          /> */}
          {/* {timeNullError && (
            <p className="text-right text-error mt-1">زمان را وارد کنید</p>
          )} */}
        </div>
        <div>
          <form onSubmit={handleSubmit(handleForm)} method='post' className='flex flex-col gap-y-5'>
            <RHFSelect
              name="service"
              label="خدمت مورد نظر"
              register={register}
              options={options}
              required
            />
            <button type="submit" className='btn btn--primary'>جستجو</button>
          </form>
        </div>
      </div>
      <div className='w-4/6 mt-10 flex flex-col gap-y-10 h-96'>
        <div>
          <p className='text-right text-secondary-900'>
            زمان مورد نظر خود را انتخاب کنید
          </p>
        </div>
        <div className='flex flex-row gap-x-4 flex-wrap gap-y-5'>
          {timesOnDay && timesOnDay.map(item => (
            item.map(i => i.status==="available" && (
              <TimeItem key={i.id} label={i.value} value={selectedTime} setValue={setSelectedTime} />
            ))
          ))}
        </div>
        <div>
        {selectedTime && (
          <div className='flex flex-col text-center'>
            <p className='text-secondary-900'> شما زمان {selectedTime} را انتخاب کردید. </p>
            <button className='btn btn--primary w-2/3 mx-auto mt-2' onClick={() => {}}>تایید</button>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}

export default SetReservTime;