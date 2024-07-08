function RadioInput({
  label,
  value, 
  register, 
  name, 
  watch, 
  validationSchema
}) {
  return (
    <div className='flex items-center gap-x-2 text-secondary-600'>
        <input 
            className='cursor-pointer w-4 h-4 form-radio text-purple-600 focus:ring-purple-600' // text-primary-900 focus:ring-primary-900
            type="radio" 
            name={name}
            id={value}
            value={value}
            {... register(name, validationSchema)}
            checked = {watch(name) === value}
        />
        <label htmlFor={value}>{label}</label>
        
    </div>
  )
}

export default RadioInput