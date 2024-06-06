import React from 'react'

function Form({ onsubmit, children }) {
  return (
    <form onSubmit={ onsubmit() }>
        { children }
    </form>
  )
}

export default Form;
