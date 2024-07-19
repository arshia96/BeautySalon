import React from 'react'

function TimeItem({ label, value, setValue }) {
  return (
    <label onClick={() => setValue(label)}>
        <div className={`w-24 border border-x-violet-700 border-y-purple-800 px-4 py-2 shadow-sm shadow-secondary-700 rounded-full text-center text-secondary-700 ${value===label ? 'shadow-purple-900 border-purple-900 bg-violet-700 text-white' : ' hover:shadow-purple-700 hover:border-purple-500'}`}>
            <input type='radio' style={{display: "none"}} disabled={value===label ? true : false} />
            <p>{label}</p>
        </div>
    </label>
  )
}

export default TimeItem;