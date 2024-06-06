import React from 'react'

function SingleTextCard({ children, className = "" }) {
  return (
    <div className={`bg-pink-100 mt-2 h-full w-full rounded-md p-4 shadow-md shadow-secondary-300 ${className}`}>
        { children }
    </div>
  )
}

export default SingleTextCard;