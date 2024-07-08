import React from 'react'
import CompleteProfileForm from '../features/authentication/CompleteProfileForm'

function CompleteProfile() {
  return (
    <div className='h-screen w-full bg-secondary-0 pt-20'>
      <div className="container xl:max-w-screen-xl">
        <CompleteProfileForm />
      </div>
    </div>
  )
}

export default CompleteProfile