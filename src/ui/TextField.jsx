import React from 'react'

function TextField({ label, title='', name, register, validationSchema, type="text", required, errors, size="normal", className="", disabled=false }) {
  return (
    <div>
        <label className='mb-2 block text-secondary-700' htmlFor={name}>
            {label} {required && <span className='text-error'>*</span>}
        </label>
        {size === "normal" ? (
          <input 
            title={title}
            {...register(name, validationSchema)}
            id={name}
            className={`textField__input ${className} ${disabled ? 'bg-secondary-50' : ""}`}
            type={type}
            autoComplete='off'
            disabled={disabled}
            required={required}
          />
        ) : (
          <textarea 
            {...register(name, validationSchema)}
            id={name}
            className={`textField__input h-32 ${className} `}
            type={type}
            autoComplete='off'
            disabled={disabled}
            required={required}
          />
        )}
        
        {errors && errors[name] && <span className='text-error block text-sm mt-2'>{errors[name]?.message}</span>}
    </div>
  )
}

export default TextField