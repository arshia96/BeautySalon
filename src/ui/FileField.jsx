import React from 'react'

function FileField({ children, onChange }) {
  return (
    <label>
        {children}
        <input 
            type="file" 
            style={{display: "none"}} 
            onChange={onChange}
        />
    </label>
  )
}

export default FileField