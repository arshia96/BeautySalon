import React from 'react'
import ReservTime from '../features/customer/ReservTime'
import useSubmittedTimes from '../hooks/useSubmittedTimes'

function CustomerReservTime() {
    const data = useSubmittedTimes();
  return (
    <ReservTime times={data} />
  )
}

export default CustomerReservTime