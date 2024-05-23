import React from 'react'

function TimeItem({ label, value, setValue }) {
  return (
    <label onClick={() => setValue(label)}>
        <div className={`w-24 border border-secondary-500 px-4 py-2 shadow-sm shadow-secondary-700 rounded-full text-center text-secondary-700 ${value===label ? 'shadow-primary-900 border-primary-900 bg-primary-800 text-white' : ' hover:shadow-primary-700 hover:border-primary-500'}`}>
            <input type='radio' style={{display: "none"}} disabled={value===label ? true : false} />
            <p>{label}</p>
        </div>
    </label>
  )
}

export default TimeItem;