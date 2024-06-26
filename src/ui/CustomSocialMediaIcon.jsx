import React from 'react'
import { SocialIcon } from 'react-social-icons'

function CustomSocialMediaIcon({ href, iconUrl }) {
  return (
    <a className='flex gap-x-1' href={href}>
        <SocialIcon
        className='transition-all duration-300 hover:-translate-y-1' 
        style={{width: "30px", height: "30px"}} 
        url={iconUrl}
        target='_blank' />
    </a>
  )
}

export default CustomSocialMediaIcon