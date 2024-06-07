import React from 'react'

function Form({ className='', onsubmit, children }) {
  return (
    <form className={`${className}`} onSubmit={ onsubmit() }>
        { children }
    </form>
  )
}

export default Form;
