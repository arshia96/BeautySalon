import React from 'react'
import Form from '../../ui/Form'

function AuthContainer() {
  return (
    <div className='flex flex-col'>
        <Form onsubmit={() => {}}>
            <input className='border border-purple-400' type="tel" name="phoneNumber" />
        </Form>
    </div>
  )
}

export default AuthContainer;